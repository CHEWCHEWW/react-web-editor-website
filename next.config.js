export const reactStrictMode = true;
export function redirects() {
  return [
    {
      source: "/",
      destination: "/home",
      permanent: true,
    }
  ];
}
