#!/bin/sh

# Install Yarn workspace dependencies to Lambda Layer directory
yarn install --flat --modules-folder lambda-layer/nodejs/node_modules --no-progresss --non-interactive --production --silent

# Remove workspace directories from Lambda Layer node_modules
# to prevent circular references
rm -rf \
  lambda-layer/nodejs/node_modules/cloud-infrastructure \
  lambda-layer/nodejs/node_modules/lambda-a \
  lambda-layer/nodejs/node_modules/lambda-b
