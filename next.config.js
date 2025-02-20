/** @type {import('next').NextConfig} */
const nextConfig = {
  // image optimization
  images: {
     domains: ['http://r004kgocck4004wkcgksssss.188.245.40.38.sslip.io'],
  },
}

module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['cs', 'en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'cs',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: 'localhost/cs',
        defaultLocale: 'cs',
        locales: ['cs']
      },
      {
        domain: 'localhost/en',
        defaultLocale: 'en',
        locales: ['en']
      },
    ],
  },
}