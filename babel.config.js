/* eslint-env node */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // '@babel/plugin-proposal-export-namespace-from', // It is now included in babel-preset-expo in Expo SDK 49
      'react-native-reanimated/plugin',
    ],
  };
};
