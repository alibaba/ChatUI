module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/es/', '/dist/', 'examples'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
