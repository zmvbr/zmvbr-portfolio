import { Contact } from '@/components/Contact';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { NavLinks } from '@/components/NavLinks';
import { Reveal } from '@/components/Reveal';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { about, profile, skills } from '@/lib/content';


export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="logo">{profile.name.toLowerCase()}<span>.</span></a>
          <div className="nav-right">
            <NavLinks />
            <ThemeSwitch />
          </div>
        </div>
      </header>

      <main>
        <Hero name={profile.name} role={profile.role} tagline={profile.tagline} />
        <Marquee />

        <section className="container section" id="about">
          <div className="about-text">
            {about.map((p, i) => (
              <Reveal key={p} delay={i * 0.08}><p>{p}</p></Reveal>
            ))}
          </div>
        </section>

        <section className="container section" id="skills">
          <Reveal><h2 className="h2">What I do</h2></Reveal>
          <ul className="rows">
            {skills.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.05}>
                  <div className="row">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section className="container section" id="contact">
          <Reveal>
            <div className="panel">
              <h2 className="contact-title">Let’s build something<br />players remember.</h2>
              <Contact discord={profile.discord} robloxUser={profile.robloxUser} roblox={profile.roblox} />
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="container footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
