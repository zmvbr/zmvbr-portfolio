'use client';

import { useEffect, useState } from 'react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export function NavLinks() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav className="nav-links" aria-label="Sections">
      {links.map((l) => (
        <a key={l.id} href={`#${l.id}`} data-active={active === l.id}>{l.label}</a>
      ))}
    </nav>
  );
}
