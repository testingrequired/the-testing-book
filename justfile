default:
    @just --list

# Build the project
build:
    cd book && just build
    cd site && just build
    mkdir -p dist
    cp -a site/dist/. dist
    mkdir -p dist/book
    cp -a book/book/. dist/book

clean:
    cd book && just clean
    cd site && just clean
    rm -rf docs

watch:
    cd book && just watch
    cd site && just watch
