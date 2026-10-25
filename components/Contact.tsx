'use client';

import { Button, Group } from '@mantine/core';
import { useState } from 'react';
import { CheckIcon, DiscordIcon, RobloxIcon } from './Icons';

export function Contact({ discord, robloxUser, roblox }: { discord: string; robloxUser: string; roblox: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(discord);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <Group gap="sm">
      <Button className="btn" size="lg" radius="xl" leftSection={copied ? <CheckIcon /> : <DiscordIcon />} onClick={copy}>
        {copied ? 'Copied' : discord}
      </Button>
      <Button className="btn" size="lg" radius="xl" variant="default" leftSection={<RobloxIcon />} component="a" href={roblox} target="_blank" rel="noreferrer">
        {robloxUser}
      </Button>
    </Group>
  );
}
