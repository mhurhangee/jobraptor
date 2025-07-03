import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import remarkGfm from 'remark-gfm'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  // Optimize output for production builds
  output: 'standalone',
  // Optimize webpack for production builds
  webpack: (config, { dev, isServer }) => {
    // Only include fs in server-side and during build time
    if (!dev && !isServer) {
      // Replace fs with an empty module on the client side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      }
    }
    return config
  },
  // Exclude large dependencies from serverless functions
  transpilePackages: ['next-mdx-remote'],
}

export default withMDX(nextConfig)
