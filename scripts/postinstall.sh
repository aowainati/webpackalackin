#!/usr/bin/env bash
set -e

# Hack until the PR is merged:
# https://github.com/mjackson/babel-plugin-transform-define/pull/3
# Due to npm bug:
# https://github.com/npm/npm/issues/3055
pushd node_modules/babel-plugin-transform-define
npm run build
popd
