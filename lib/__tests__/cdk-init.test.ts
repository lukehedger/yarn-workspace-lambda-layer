import "@aws-cdk/assert/jest";
import { App } from "@aws-cdk/core";
import { CdkInitStack } from "../cdk-init-stack";

let stack: CdkInitStack;

beforeAll(() => {
  const app = new App();

  stack = new CdkInitStack(app, "CdkInitStack");
});

test("Stack has no resources", () => {
  expect(stack).toMatchTemplate({
    Resources: {}
  });
});
