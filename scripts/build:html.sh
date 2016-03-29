#!/usr/bin/env bash
set -e

echo Copying HTML files to build directory
mkdir build
cp -r src/html/* build/
