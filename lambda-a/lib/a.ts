import { Handler } from "aws-lambda";
import { addDays } from "date-fns";
import { logger } from "/opt/nodejs/util-logger";

export const handler: Handler = async () => {
  const tomorrow = addDays(new Date(), 1);

  logger(tomorrow);

  return {
    tomorrow: tomorrow
  };
};
