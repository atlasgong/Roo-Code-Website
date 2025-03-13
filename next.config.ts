import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
    pageExtensions: ["md", "mdx", "ts", "tsx"],
    output: 'export',
    images: {
        unoptimized: true,
    },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
