/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, { webpack }) => {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        config.externals["node:fs"] = "commonjs node:fs";
        config.externals["node:fs/promises"] = "commonjs2 node:fs/promises";
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };
        config.plugins.push(
            new webpack.NormalModuleReplacementPlugin(
                /^node:/,
                (resource) => {
                    resource.request = resource.request.replace(/^node:/, '');
                },
            ),
        );

        return config;
    }
};

export default nextConfig;
