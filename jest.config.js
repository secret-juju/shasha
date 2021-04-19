module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    '<rootDir>/src/__test__/config/importJestDOM.ts',
  ],
  testMatch: ['**/(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '\\.(svg|jpg|jpeg|png|gif)$': '<rootDir>/src/__mocks__/fileMock.ts',
  },
};
