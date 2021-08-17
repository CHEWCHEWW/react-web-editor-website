module.exports = {
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      }
    ];
  },
};
