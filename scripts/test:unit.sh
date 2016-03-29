#!/usr/bin/env bash
set -e

FILES=($(find test/unit -name "*.js"))

OPTIONS=()
if [[ "${CIRCLE_TEST_REPORTS}" != "" ]]; then
    OPTIONS+=(
        --reporter mocha-circleci-reporter
        --reporter-options mochaFile="${CIRCLE_TEST_REPORTS}"/test:unit.xml
    )
fi

# TODO : Set NODE_ENV to anything other than development so react-transform-hmr doesn't kick in (from .babelrc)
#        We should probably make 'test' a VARIANT and fetch it that way.
NODE_ENV=test ./node_modules/.bin/mocha \
    "${OPTIONS[@]}" \
    --require ./test/env/boot \
    --require ./test/env/unit \
    "$@" \
    "${FILES[@]}"
