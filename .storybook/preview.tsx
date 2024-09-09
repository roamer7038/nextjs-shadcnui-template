import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../components/theme/theme-provider';
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
