default:
    @just --list

install:
    cd book && just install
    cd site && just install

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
    echo "No test script"

verify-local:
    just clean
    just build --base=/
    cd e2e && npm run serve-and-test-local