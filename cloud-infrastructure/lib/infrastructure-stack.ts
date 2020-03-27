import { Code, Function, Runtime } from "@aws-cdk/aws-lambda";
import { Construct, Stack, StackProps } from "@aws-cdk/core";

export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Function(this, "ALambda", {
      code: Code.fromAsset("../lambda-a/bin"),
      functionName: "A",
      handler: "a.handler",
      runtime: Runtime.NODEJS_12_X
    });

    new Function(this, "BLambda", {
      code: Code.fromAsset("../lambda-b/bin"),
      functionName: "B",
      handler: "b.handler",
      runtime: Runtime.NODEJS_12_X
    });
  }
}
