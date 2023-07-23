module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      ['babel-preset-expo'],
      ['module:metro-react-native-babel-preset'],
    ],
    plugins: [
      'react-native-reanimated/plugin',
      require.resolve('expo-router/babel'),
      'nativewind/babel',
      '@babel/plugin-transform-flow-strip-types',
      '@babel/plugin-proposal-export-namespace-from',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],

      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            'solito/image': 'solito/image/expo',
          },
        },
      ],
    ],
  }
}
