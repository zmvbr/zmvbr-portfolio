// GitHub Pages serves project sites under /<repo>; base path applies only in Actions.
const basePath = process.env.GITHUB_ACTIONS ? '/zmvbr-portfolio' : '';

export default {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  experimental: { optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@tabler/icons-react'] },
};
