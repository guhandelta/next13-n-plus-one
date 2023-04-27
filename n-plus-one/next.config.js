/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  /*This config is to let NextJS know and display the images available at localhost*/
  images:{
    /*To protect the application from malicious users, configuration is required in order to use external 
    images. This ensures that only external images from user's account can be served from the Next.js 
    Image Optimization API. These external images can be configured with the remotePatterns property in 
    the next.config.js file*/
    remotePatterns:[
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/**"
      },
   ]
    /*The above config will ensure the src property of next/image must start with https://localhost:8080/. 
    /** => any path after the hostname(eg: http://localhost:portNo/ or http://example.com/)
    Any other protocol, hostname, port, or unmatched path will respond with 400 Bad Request.*/
  }
}

module.exports = nextConfig
