/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
          includePaths: ['./src'],
          prependData: `@import "~@styles/icons.css";`,
      }
  }
  return defaultConfig;
}

module.exports = nextConfig
