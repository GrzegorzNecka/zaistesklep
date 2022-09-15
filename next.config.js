// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     images: { domains: ["picsum.photos", "naszsklep-api.vercel.app", "media.graphassets.com"] },
//     formats: ["image/avif", "image/webp"],
//     webpack(config) {
//         config.module.rules.push({
//             test: /\.svg$/i,
//             issuer: /\.[jt]sx?$/,
//             use: ["@svgr/webpack"],
//         });

//         return config;
//     },
// };

// module.exports = nextConfig;

module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        reactStrictMode: true,
        images: { domains: ["picsum.photos", "naszsklep-api.vercel.app", "media.graphassets.com"] },
        webpack(config) {
            config.module.rules.push({
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ["@svgr/webpack"],
            });

            return config;
        },
    };
    return nextConfig;
};
