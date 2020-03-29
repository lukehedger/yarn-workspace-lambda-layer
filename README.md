# yarn-workspace-lambda-layer

[Yarn workspaces](https://yarnpkg.com/features/workspaces) simplify working with monorepos. Dependencies for all "workspaces" in a monorepo are hoisted to a shared `node_modules` at the root of a project - this avoids duplication and speeds up installations. Workspaces can also depend on other workspaces, making it trivial to share common utilities across your monorepo.

[Lambda layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) can be used to distribute shared dependencies to your Lambda functions. Dependencies do not need to be shipped with the Lambda deployment package, meaning smaller Lambdas and reduced invocation times.

Yarn workspaces and Lambda layers can be combined to provide a seamless dependency workflow across local and remote environments. Dependency management is centralised and standardised. Lambda code can be compiled (when using TypeScript, Babel etc) without needing a module bundler (like Rollup or Webpack).

## Features

- Install all monorepo dependencies locally and in CI with a single command: `yarn install`
- Build all workspaces locally and in CI with a single command: `yarn build`
- Test all workspaces locally and in CI with a single command: `yarn test`
- Install only production dependencies (local and 3rd party) to the Lambda Layer: `yarn layer` ([the magic happens in this script](https://github.com/lukehedger/yarn-workspace-lambda-layer/blob/master/scripts/deps-layer.sh) ✨)
- Lambda layer imports `/opt/nodejs/` can be mapped to local directories when working with [TypeScript](https://github.com/lukehedger/yarn-workspace-lambda-layer/blob/master/lambda-a/tsconfig.json#L13) or [Jest](https://github.com/lukehedger/yarn-workspace-lambda-layer/blob/master/lambda-a/jest.config.js#L3)
- Bonus: Compose Lambdas and layers using the [AWS CDK](https://github.com/lukehedger/yarn-workspace-lambda-layer/blob/master/cloud-infrastructure/lib/infrastructure-stack.ts)
