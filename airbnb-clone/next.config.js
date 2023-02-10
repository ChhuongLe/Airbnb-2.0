/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com',
    'cdn1.iconfinder.com',
    'cdn3.iconfinder.com',
    'cdn4.iconfinder.com',
    'cdn0.iconfinder.com',
    'www.sunset.com',
    'www.livelikeitstheweekend.com',
    'cdn.houseplansservices.com',
    'd3544la1u8djza.cloudfront.net',
    "a0.muscache.com"]
  },
  env: {
    mapbox_key: "pk.eyJ1IjoidGlueXl1dXNoYSIsImEiOiJjbGR4cGttNmgwajgyM3BwNzJtNnduaWliIn0.cCAwM4jOvDnZUJ-eh4ierQ",
  }
}

module.exports = nextConfig
