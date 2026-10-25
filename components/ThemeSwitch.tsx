'use client';

import { ActionIcon, Box, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { flushSync } from 'react-dom';

export function ThemeSwitch() {
  const { setColorScheme } = useMantineColorScheme();
  const scheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = scheme === 'dark' ? 'light' : 'dark';
    const r = e.currentTarget.getBoundingClientRect();
    const root = document.documentElement;
    root.style.setProperty('--vt-x', `${r.left + r.width / 2}px`);
    root.style.setProperty('--vt-y', `${r.top + r.height / 2}px`);
    const apply = () => flushSync(() => setColorScheme(next));
    // Circular reveal from the button where supported; plain swap otherwise.
    if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.startViewTransition(apply);
    } else apply();
  };

  return (
    <ActionIcon className="theme-btn" variant="default" radius="xl" size="lg" aria-label="Toggle light/dark theme" onClick={toggle}>
      <Box darkHidden className="theme-icon"><IconMoon size={18} stroke={1.6} /></Box>
      <Box lightHidden className="theme-icon"><IconSun size={18} stroke={1.6} /></Box>
    </ActionIcon>
  );
}
