module.exports = {
  ci: {
    collect: {
      /* Add configuration here */
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000']
    },
    upload: {
      /* Add configuration here */
      target: 'temporary-public-storage'
    },
  },
};
