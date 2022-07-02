const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    baseUrl: "./src",
    alias: {
      '@assets': resolvePath('./src/assets'),
      '@components': resolvePath('./src/components'),
      '@services': resolvePath('./src/services'),
      '@pages': resolvePath('./src/pages'),
      '@layouts': resolvePath('./src/layouts')
    }
  },
}