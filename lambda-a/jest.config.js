module.exports = {
  moduleNameMapper: {
    "/opt/nodejs/util-logger": "../../util-logger"
  },
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
