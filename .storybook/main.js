module.exports = {
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-controls',
        '@storybook/addon-viewport',
    ],
    core: {
        builder: 'storybook-builder-vite',
    },
    framework: '@storybook/react',
    stories: ['../app/**/?(*.)stories.tsx'],
}
