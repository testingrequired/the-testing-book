#!/usr/bin/env bash

mkdir -p dist
cp -a site/dist/. dist
mkdir -p dist/book
cp -a book/book/. dist/book

ls -a dist

echo "ASSETS"
ls -a dist/assets

echo "BOOK"
ls -a dist/book
