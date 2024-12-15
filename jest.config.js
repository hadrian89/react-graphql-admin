
module.exports = {
  roots: ["<rootDir>/src/"],
  verbose: true,
  testEnvironmentOptions: {
    url: "http://localhost/"
  },
  coverageDirectory: "./dashboard/unit-testing",
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  collectCoverageFrom: [
    "src/**/*",
  ],
  collectPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/mock-server/",
  ],
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10,
    }
  },
  globals: {
    fetch: true,
    baseUrl: "",
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/svg-mock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "^~/(.*)$": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/__mocks__/setUpTests.js"],
  testEnvironment: "jsdom",
  // resetMocks: false,
  // restoreMocks: true
}
