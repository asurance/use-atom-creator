import path from 'node:path';
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
        globalStyles: path.join(__dirname, 'styles/index.css'),
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
