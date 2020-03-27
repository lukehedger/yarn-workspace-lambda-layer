import { Context } from "aws-lambda";
import { isYesterday } from "date-fns";
import { handler } from "../b";

test("Is it yesterday?", async () => {
  const { yesterday } = await handler({}, {} as Context, () => {});

  expect(isYesterday(yesterday)).toBeTruthy();
});
