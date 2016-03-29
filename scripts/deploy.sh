#!/usr/bin/env bash
set -e

./scripts/build.sh
./scripts/deploy:push.sh
