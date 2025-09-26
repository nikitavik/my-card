import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },

  // Security headers
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          // Prevent clickjacking attacks
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Prevent MIME type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Control referrer information
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          // Enable DNS prefetching for better performance
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          // HTTP Strict Transport Security (HSTS) - only for HTTPS
          // Uncomment when you have HTTPS enabled
          // {
          //   key: "Strict-Transport-Security",
          //   value: "max-age=63072000; includeSubDomains; preload",
          // },
          // Permissions Policy (restrict browser features)
          {
            key: "Permissions-Policy",
            value: [
              "camera=()",
              "microphone=()",
              "geolocation=()",
              "gyroscope=()",
              "magnetometer=()",
              "payment=()",
              "usb=()",
            ].join(", "),
          },
          // Remove server information
          {
            key: "X-Powered-By",
            value: "",
          },
        ],
      },
    ];
  },

  // Additional security settings
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable compression
  reactStrictMode: true, // Enable React strict mode
};

export default nextConfig;
