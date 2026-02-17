

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  framework: "@storybook/react-vite",
  async viteFinal(config) {
    return {
      ...config,
      server: {
        ...config.server,
        hmr: {
          ...(config.server?.hmr ?? {}),
          host: 'localhost',
        },
        watch: {
          ...(config.server?.watch ?? {}),
          usePolling: true,
          interval: 1000,
        },
      },
    }
  },
};
export default config;