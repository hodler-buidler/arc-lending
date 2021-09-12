const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
      alias: {
        '@components': resolvePath('./src/components'),
        '@assets': resolvePath('./src/assets'),
        '@typings': resolvePath('./src/typings'),
        '@utils': resolvePath('./src/utils'),
        '@pages': resolvePath('./src/pages'),
        '@state': resolvePath('./src/state'),
        '@config': resolvePath('./src/config'),
        '@logic': resolvePath('./src/logic'),
        '@abis': resolvePath('./src/abis'),
        '@api': resolvePath('./src/api'),
      },
  },
}
