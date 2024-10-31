#!/usr/bin/env bash

# Copy the site's build
mkdir -p dist/html
cp -a site/dist/. dist/html

# Copy the book's html build
mkdir -p dist/html/book
cp -a book/book/html/. dist/html/book

# Copy the book's epub build
mkdir -p dist/epub
cp -a book/book/epub/. dist/epub

# List out directories/files created
ls -a dist/html

echo "ASSETS"
ls -a dist/html/assets

echo "BOOK"
ls -a dist/html/book
