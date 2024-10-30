default:
    @just --list

# Build the project
build:
    cd book && just build
    cd site && just build

clean:
    cd book && just clean
    cd site && just clean