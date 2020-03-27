#!/bin/sh

# Install Yarn workspace dependencies to Lambda Layer directory
yarn install --flat --modules-folder lambda-layer/node_modules --no-progresss --non-interactive --production --silent

# Remove workspace directories from Lambda Layer node_modules
# to prevent circular references
rm -rf \
  lambda-layer/node_modules/cloud-infrastructure \
  lambda-layer/node_modules/lambda-a \
  lambda-layer/node_modules/lambda-b
