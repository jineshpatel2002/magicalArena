import "dotenv/config";

export const config = {
  LOG_NAME: "magicalArena",
  LOG_LEVEL: process.env.LOG_LEVEL ?? "",
  PORT: (process.env.PORT || 3000) as number,
};
  