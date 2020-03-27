#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { InfrastructureStack } from "../lib/infrastructure-stack";

const app = new App();

new InfrastructureStack(app, "YarnWorkspaceLambdaLayer");
