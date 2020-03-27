import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";
import { isTomorrow, parseISO } from "date-fns";

const lambda = new LambdaClient({ region: "eu-west-2" });

test("Is it tomorrow?", async () => {
  try {
    expect.assertions(1);

    const invokeCommand = new InvokeCommand({ FunctionName: "A" });

    const invokeCommandResponse = await lambda.send(invokeCommand);

    if (invokeCommandResponse.Payload) {
      const payload = JSON.parse(
        Buffer.from(invokeCommandResponse.Payload).toString()
      );

      if (payload.errorMessage || typeof payload.tomorrow === "undefined") {
        throw new Error(payload.errorMessage);
      }

      expect(isTomorrow(parseISO(payload.tomorrow))).toBeTruthy();
    } else {
      throw new Error("No response payload");
    }
  } catch (error) {
    throw new Error(error);
  }
});
