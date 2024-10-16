import { defineConfig, moduleTools } from '@modern-js/module-tools';
import { modulePluginDoc } from '@modern-js/plugin-rspress';

export default defineConfig({
  plugins: [
    moduleTools(),
    modulePluginDoc({
      doc: {
        title: 'Use Atom Creator',
        description: 'A React hook for creating atoms easily',
        base: '/use-atom-creator',
        themeConfig: {
          socialLinks: [
            {
              icon: 'github',
              mode: 'link',
              content: 'https://github.com/asurance/use-atom-creator',
            },
          ],
        },
      },
    }),
  ],
  buildPreset: 'npm-library',
});
