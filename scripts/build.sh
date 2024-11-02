#!/usr/bin/env bash

./scripts/build-book.sh
./scripts/build-site.sh "$@"
./scripts/build-dist.sh

cd mdbook-pagebreaks && cargo build
cd ..
./scripts/install-mdbook-plugins.sh