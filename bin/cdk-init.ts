#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { CdkInitStack } from "../lib/cdk-init-stack";

const app = new App();

new CdkInitStack(app, "CdkInitStack");
