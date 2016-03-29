#!/usr/bin/env bash
set -e

source ./scripts/include/config.sh

webpack --config webpack.config.${config_variant}.babel.js
