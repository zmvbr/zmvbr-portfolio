'use client';

import { Button, Group } from '@mantine/core';
import { motion } from 'motion/react';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero({ name, role, tagline }: { name: string; role: string; tagline: string }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <motion.h1 className="hero-title" {...fade(0)}>
          {name}<span className="dot">.</span>
        </motion.h1>
        <motion.p className="hero-role" {...fade(0.1)}>{role}</motion.p>
        <motion.p className="hero-tagline" {...fade(0.2)}>{tagline}</motion.p>
        <motion.div {...fade(0.3)}>
          <Group mt="xl" gap="sm">
            <Button className="btn" size="md" radius="xl" component="a" href="#contact">Get in touch</Button>
            <Button className="btn" size="md" radius="xl" variant="default" component="a" href="#skills">What I do</Button>
          </Group>
        </motion.div>
      </div>
    </section>
  );
}
