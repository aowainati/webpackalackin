#!/usr/bin/env bash
set -e

source ./scripts/include/config.sh

webpack --config ./config/webpack/index.babel.js
