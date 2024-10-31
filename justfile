default:
    @just --list

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
