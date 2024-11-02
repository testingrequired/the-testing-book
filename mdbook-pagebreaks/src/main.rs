use crate::linebreaks_lib::LineBreaks;
use clap::{Arg, ArgMatches, Command};
use mdbook::book::Book;
use mdbook::errors::Error;
use mdbook::preprocess::{CmdPreprocessor, Preprocessor, PreprocessorContext};
use semver::{Version, VersionReq};
use std::io;
use std::process;

mod replacer;

pub fn make_app() -> Command {
    Command::new("linebreaks-preprocessor")
        .about("A mdbook preprocessor which inserts page breaks")
        .subcommand(
            Command::new("supports")
                .arg(Arg::new("renderer").required(true))
                .about("Check whether a renderer is supported by this preprocessor"),
        )
}

fn main() {
    let matches = make_app().get_matches();

    let preprocessor = LineBreaks::new();

    if let Some(sub_args) = matches.subcommand_matches("supports") {
        handle_supports(&preprocessor, sub_args);
    } else if let Err(e) = handle_preprocessing(&preprocessor) {
        eprintln!("{e}");
        process::exit(1);
    }
}

fn handle_preprocessing(pre: &dyn Preprocessor) -> Result<(), Error> {
    let (ctx, book) = CmdPreprocessor::parse_input(io::stdin())?;

    let book_version = Version::parse(&ctx.mdbook_version)?;
    let version_req = VersionReq::parse(mdbook::MDBOOK_VERSION)?;

    if !version_req.matches(&book_version) {
        eprintln!(
            "Warning: The {} plugin was built against version {} of mdbook, \
             but we're being called from version {}",
            pre.name(),
            mdbook::MDBOOK_VERSION,
            ctx.mdbook_version
        );
    }

    let processed_book = pre.run(&ctx, book)?;
    serde_json::to_writer(io::stdout(), &processed_book)?;

    Ok(())
}

fn handle_supports(pre: &dyn Preprocessor, sub_args: &ArgMatches) -> ! {
    let renderer = sub_args
        .get_one::<String>("renderer")
        .expect("Required argument");
    let supported = pre.supports_renderer(renderer);

    eprintln!("Handling supports for renderer {renderer}: {supported}");

    // Signal whether the renderer is supported by exiting with 1 or 0.
    if supported {
        process::exit(0);
    } else {
        process::exit(1);
    }
}

mod linebreaks_lib {
    use mdbook::BookItem;
    use replacer::replace_page_breaks;

    use super::*;

    pub struct LineBreaks;

    impl LineBreaks {
        pub fn new() -> LineBreaks {
            LineBreaks
        }
    }

    impl Preprocessor for LineBreaks {
        fn name(&self) -> &str {
            "linebreaks-preprocessor"
        }

        fn run(&self, ctx: &PreprocessorContext, mut book: Book) -> Result<Book, Error> {
            if let Some(_cfg) = ctx.config.get_preprocessor(self.name()) {}

            book.for_each_mut(|item| {
                if let BookItem::Chapter(chapter) = item {
                    chapter.content = replace_page_breaks(&chapter.content);
                }
            });

            Ok(book)
        }

        fn supports_renderer(&self, renderer: &str) -> bool {
            renderer == "html"
        }
    }

    #[cfg(test)]
    mod test {
        use super::*;
        use pretty_assertions::assert_eq;

        #[test]
        fn linebreaks_preprocessor_run() {
            let input_json = r##"[
                {
                    "root": "/path/to/book",
                    "config": {
                        "book": {
                            "authors": ["AUTHOR"],
                            "language": "en",
                            "multilingual": false,
                            "src": "src",
                            "title": "TITLE"
                        },
                        "preprocessor": {
                            "linebreaks": {}
                        }
                    },
                    "renderer": "html",
                    "mdbook_version": "0.4.21"
                },
                {
                    "sections": [
                        {
                            "Chapter": {
                                "name": "Chapter 1",
                                "content": "# Chapter 1\n{{---}}",
                                "number": [1],
                                "sub_items": [],
                                "path": "chapter_1.md",
                                "source_path": "chapter_1.md",
                                "parent_names": []
                            }
                        }
                    ],
                    "__non_exhaustive": null
                }
            ]"##;
            let input_json = input_json.as_bytes();
            let (input_ctx, input_book) =
                mdbook::preprocess::CmdPreprocessor::parse_input(input_json).unwrap();

            let expected_json = r##"[
                {
                    "root": "/path/to/book",
                    "config": {
                        "book": {
                            "authors": ["AUTHOR"],
                            "language": "en",
                            "multilingual": false,
                            "src": "src",
                            "title": "TITLE"
                        },
                        "preprocessor": {
                            "linebreaks": {}
                        }
                    },
                    "renderer": "html",
                    "mdbook_version": "0.4.21"
                },
                {
                    "sections": [
                        {
                            "Chapter": {
                                "name": "Chapter 1",
                                "content": "# Chapter 1\n<div style=\"page-break-before:always\">&nbsp;</div>",
                                "number": [1],
                                "sub_items": [],
                                "path": "chapter_1.md",
                                "source_path": "chapter_1.md",
                                "parent_names": []
                            }
                        }
                    ],
                    "__non_exhaustive": null
                }
            ]"##;
            let expected_json = expected_json.as_bytes();
            let (_, expected_book) =
                mdbook::preprocess::CmdPreprocessor::parse_input(expected_json).unwrap();

            let result = LineBreaks::new().run(&input_ctx, input_book);
            assert!(result.is_ok());

            let actual_book = result.unwrap();
            assert_eq!(expected_book, actual_book);
        }
    }
}
