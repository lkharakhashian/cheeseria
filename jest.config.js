module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
    setupFilesAfterEnv: ['./tests/setup.ts'],
    moduleNameMapper: {
      '^liquibase$': './tests/mocks/liquibase.js'
    }
  };
  