import "@aws-cdk/assert/jest";
import { App } from "@aws-cdk/core";
import { InfrastructureStack } from "../infrastructure-stack";

let stack: InfrastructureStack;

beforeAll(() => {
  const app = new App();

  stack = new InfrastructureStack(app, "InfrastructureStack");
});

test("Stack has A Lambda resource", () => {
  expect(stack).toHaveResource("AWS::Lambda::Function", {
    FunctionName: "A",
    Handler: "a.handler",
    Runtime: "nodejs12.x"
  });
});

test("Stack has B Lambda resource", () => {
  expect(stack).toHaveResource("AWS::Lambda::Function", {
    FunctionName: "B",
    Handler: "b.handler",
    Runtime: "nodejs12.x"
  });
});
