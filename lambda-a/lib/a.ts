import { Handler } from "aws-lambda";
import { addDays } from "date-fns";

export const handler: Handler = async () => {
  const tomorrow = addDays(new Date(), 1);

  return {
    tomorrow: tomorrow
  };
};
