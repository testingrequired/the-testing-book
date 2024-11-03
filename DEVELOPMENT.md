# Development Guide

## Dependencies

- [Rust](https://www.rust-lang.org/learn/get-started)
- [Node](https://nodejs.org/en/download) (see [version](.nvmrc))
- [Just](https://just.systems/)

## Install

Install everything needed to get going.

```shell
just install
```

## Build

Build [site](./site/) and [book](./book/) then output everything to the `dist` directory.

```shell
just build
```

## Clean

Clean build artifacts.

```shell
just clean
```

## E2E Test

Builds and serves the site/book locally then runs E2E test against it.

```shell
just verify-local
```
