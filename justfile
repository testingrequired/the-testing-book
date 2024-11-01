default:
    @just --list

install:
    cd book && just install
    cd site && just install
    cd e2e && just install

# Build the site and book
build *args='':
    ./scripts/build.sh {{args}}

clean:
    cd book && just clean
    cd site && just clean
    rm -rf dist

watch:
    cd book && just watch
    cd site && just watch

test:
    cd e2e && just test
