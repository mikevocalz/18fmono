const { withExpo } = require('@expo/next-adapter')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'moti',
    'app',
    'react-native-reanimated',
    'nativewind',
    'react-native-gesture-handler',
    'react-native-svg',
    '@expo/vector-icons',
    '@expo/html-elements',
    'react-native-vector-icons-for-web',
    'react-native-vector-icons',
    'expo-asset',
    '@react-native/assets-registry',
  ],
  experimental: {
    //optimizeCss: true,
    legacyBrowsers: false,
    scrollRestoration: true,
  },
  images: {
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, options) => {
    // font loader for react-native-vector-icons
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|eot|svg|png|jpg|jpeg|svg|pdf)$/,
      loader: 'url-loader',
      // options: {
      //   esModule: false,
      //   name: '[name].[ext]',
      //   outputPath: 'static/media/fonts/',
      //   publicPath: '../assets/fonts/',
      // },
    })

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
      '@expo/vector-icons': 'react-native-vector-icons-for-web',
      'expo-asset': 'expo-asset-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  },
}

module.exports = withExpo(nextConfig)
