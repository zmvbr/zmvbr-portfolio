import { BrandIcon, stack } from './Icons';

export function Marquee() {
  const row = (hidden: boolean) => (
    <div className="marquee-row" aria-hidden={hidden}>
      {stack.map((s) => (
        <a key={s.name} className="marquee-item" href={s.href} target="_blank" rel="noreferrer" tabIndex={hidden ? -1 : undefined}>
          <BrandIcon path={s.path} size={22} />
          {s.name}
        </a>
      ))}
    </div>
  );
  return (
    <div className="marquee" aria-label={stack.map((s) => s.name).join(', ')}>
      <div className="marquee-track">{row(false)}{row(true)}</div>
    </div>
  );
}
