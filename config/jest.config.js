module.exports = {
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90
    }
  },
  moduleDirectories: ['src', 'node_modules'],
  setupFiles: ['<rootDir>/config/test-setup.js'],
};
