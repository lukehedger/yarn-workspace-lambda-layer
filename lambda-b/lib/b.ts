import { Handler } from "aws-lambda";
import { subDays } from "date-fns";

export const handler: Handler = async () => {
  const yesterday = subDays(new Date(), 1);

  return {
    yesterday: yesterday
  };
};
