/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: false,
  // },
 
  images: {
    remotePatterns: [
      {
        hostname: "one24digital.s3.amazonaws.com",
      },
    ],
  },
};
export default nextConfig;



// https://one24.dev/api/v1/one24digital
 // images: {
  //     remotePatterns: [
  //       {
  //         protocol: 'https',
  //         hostname: "one24digital.s3.amazonaws.com",
  //         port: '',
  //         pathname: '/public/**)',
  //       },
  //     ],
  // },