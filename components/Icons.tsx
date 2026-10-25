import { siCss, siDiscord, siHtml5, siJavascript, siLua, siNextdotjs, siNodedotjs, siReact, siRoblox, siTypescript } from 'simple-icons';

type P = { size?: number };

export function BrandIcon({ path, size = 22 }: { path: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

export const DiscordIcon = ({ size = 18 }: P) => <BrandIcon path={siDiscord.path} size={size} />;
export const RobloxIcon = ({ size = 18 }: P) => <BrandIcon path={siRoblox.path} size={size} />;

export const stack = [
  { name: 'Luau', path: siLua.path, href: 'https://luau.org' },
  { name: 'JavaScript', path: siJavascript.path, href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', path: siTypescript.path, href: 'https://www.typescriptlang.org/docs/' },
  { name: 'HTML', path: siHtml5.path, href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', path: siCss.path, href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'React', path: siReact.path, href: 'https://react.dev' },
  { name: 'Next.js', path: siNextdotjs.path, href: 'https://nextjs.org/docs' },
  { name: 'Node.js', path: siNodedotjs.path, href: 'https://nodejs.org/docs/latest/api/' },
  { name: 'Roblox', path: siRoblox.path, href: 'https://create.roblox.com/docs' },
];

export function MailIcon({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </svg>
  );
}

export function CheckIcon({ size = 18 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}
