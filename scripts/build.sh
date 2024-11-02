#!/usr/bin/env bash

./scripts/install-mdbook-plugins.sh
./scripts/build-book.sh
./scripts/build-site.sh "$@"
./scripts/build-dist.sh