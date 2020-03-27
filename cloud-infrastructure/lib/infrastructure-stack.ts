import { Code, Function, LayerVersion, Runtime } from "@aws-cdk/aws-lambda";
import { Construct, Stack, StackProps } from "@aws-cdk/core";

export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const dependenciesLayer = new LayerVersion(this, "DependenciesLayer", {
      code: Code.fromAsset("../lambda-layer"),
      compatibleRuntimes: [Runtime.NODEJS_12_X]
    });

    new Function(this, "ALambda", {
      code: Code.fromAsset("../lambda-a/bin"),
      functionName: "A",
      handler: "a.handler",
      layers: [dependenciesLayer],
      runtime: Runtime.NODEJS_12_X
    });

    new Function(this, "BLambda", {
      code: Code.fromAsset("../lambda-b/bin"),
      functionName: "B",
      handler: "b.handler",
      layers: [dependenciesLayer],
      runtime: Runtime.NODEJS_12_X
    });
  }
}
