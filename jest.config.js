module.exports = {
  modulePathIgnorePatterns: ["cdk.out"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
