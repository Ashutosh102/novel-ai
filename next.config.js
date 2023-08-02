/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/Ashutosh102/novel-ai",
        permanent: true,
      },
      {
        source: "/feedback",
        destination: "https://github.com/Ashutosh102/novel-ai/issues",
        permanent: true,
      },
      {
        source: "/deploy",
        destination: "https://github.com/Ashutosh102/novel-ai",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
