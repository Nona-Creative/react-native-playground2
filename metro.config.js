/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path')

module.exports = (async () => {
  return {
    projectRoot: path.resolve(__dirname, '.'),
    watchFolders: [
      path.resolve(__dirname),
      path.resolve(__dirname, 'node_modules'),
    ],
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
  }
})()
