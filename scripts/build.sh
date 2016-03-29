#!/usr/bin/env bash
set -e

./scripts/clean.sh
./scripts/build:html.sh
./scripts/build:webpack.sh
