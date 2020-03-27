import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";
import { isYesterday } from "date-fns";

const lambda = new LambdaClient({ region: "eu-west-2" });

test("Is it yesterday?", async () => {
  try {
    expect.assertions(1);

    const invokeCommand = new InvokeCommand({ FunctionName: "A" });

    const invokeCommandResponse = await lambda.send(invokeCommand);

    if (invokeCommandResponse.Payload) {
      const payload = JSON.parse(
        Buffer.from(invokeCommandResponse.Payload).toString()
      );

      if (payload.errorMessage || typeof payload.yesterday === "undefined") {
        throw new Error(payload.errorMessage);
      }

      expect(isYesterday(payload.yesterday)).toBeTruthy();
    } else {
      throw new Error("No response payload");
    }
  } catch (error) {
    throw new Error(error);
  }
});
