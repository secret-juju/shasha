module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    'jest-localstorage-mock',
    'jest-plugin-context/setup',
    '@testing-library/jest-dom',
  ],
  testMatch: ['**/(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '\\.(svg|jpg|jpeg|png|gif)$': '<rootDir>/src/__mocks__/fileMock.ts',
  },
};
