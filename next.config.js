module.exports = {
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: "/",
        destination: "/main",
        permanent: true,
      }
    ];
  },
};
