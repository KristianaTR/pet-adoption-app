const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@atoms': path.resolve(__dirname, 'src/Components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/Components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/Components/organisms'),
      '@templates': path.resolve(__dirname, 'src/Components/templates'),
    },
  },
};