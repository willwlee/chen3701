// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true, // or false if you may change it later
      },
    ]
  },
}