import { Context } from "aws-lambda";
import { isTomorrow } from "date-fns";
import { handler } from "../a";

test("Is it tomorrow?", async () => {
  const { tomorrow } = await handler({}, {} as Context, () => {});

  expect(isTomorrow(tomorrow)).toBeTruthy();
});
