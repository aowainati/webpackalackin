#!/usr/bin/env bash
set -e

source ./scripts/include/config.sh

if [[ "${config_s3Bucket}" == "" ]]; then
  echo "No s3Bucket specified for config variant '${config_variant}'"
  exit 1
fi

echo Uploading build directory to bucket: ${config_s3Bucket}
aws s3 sync build/ s3://${config_s3Bucket}
