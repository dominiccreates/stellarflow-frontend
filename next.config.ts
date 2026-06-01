import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  optimizePackageImports: [
    "lucide-react",
    "react-icons",
  ],
};

export default withBundleAnalyzerConfig(nextConfig);
