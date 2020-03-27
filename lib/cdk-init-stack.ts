import { Construct, Stack, StackProps } from "@aws-cdk/core";

export class CdkInitStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
  }
}
