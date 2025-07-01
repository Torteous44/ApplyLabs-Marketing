import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

// Load Geist font for Storybook
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Geist:wght@100;400;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {},
      options: {
        checks: { 'color-contrast': { options: { noScroll: true } } },
        restoreScroll: true,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;