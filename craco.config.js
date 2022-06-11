const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    baseUrl: "./src",
    alias: {
      '@components': resolvePath('./src/components'),
      '@assets': resolvePath('./src/assets'),
      '@services': resolvePath('./src/services'),
      '@pages': resolvePath('./src/pages'),
      '@layouts': resolvePath('./src/layouts')
    }
  },
}