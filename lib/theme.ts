import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'dark',
  primaryShade: { light: 9, dark: 0 },
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  headings: { fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: '600' },
  defaultRadius: 'md',
  black: '#0a0a0b',
});
