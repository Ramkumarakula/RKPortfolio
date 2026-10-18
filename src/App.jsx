import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, ArrowDown, FileText, X, Network, Download } from 'lucide-react';
import avatar from './assets/avatar.webp';
import interviewerArch from './assets/interviewer-arch.webp';
import Visual from './Visuals.jsx';
import { profile, featured, more, skills, marquee } from './data.js';

const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

// One observer for every .reveal / .viz element: adds .in once it enters the viewport.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .viz');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useRotatingRole(roles) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, [roles.length]);
  return roles[i];
}

// Soft spotlight that follows the cursor on cards.
const spotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
};

function Modal({ onClose, title, children, wide }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className={`modal ${wide ? 'modal-wide' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h3>{title}</h3>
          <button className="icon-btn" onClick={onClose} aria-label="Close"><X size={18} /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const role = useRotatingRole(profile.roles);
  const [showResume, setShowResume] = useState(false);
  const [showArch, setShowArch] = useState(false);
  useReveal();

  const socials = [
    { icon: <Github size={18} />, href: profile.github, label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: profile.linkedin, label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: `mailto:${profile.email}`, label: 'Email' },
  ];

  return (
    <>
      <div className="progress" aria-hidden="true" />

      {/* NAV */}
      <header className="nav-wrap">
        <nav className="nav">
          <a href="#top" className="logo">rk<span>.</span></a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#more">More</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="btn btn-dark btn-sm" onClick={() => setShowResume(true)}>
            <FileText size={14} /> Resume
          </button>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="blobs" aria-hidden="true"><i /><i /><i /></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow reveal"><span className="pulse" /> Open to roles and collaborations</p>
              <h1 className="reveal" style={{ '--d': '80ms' }}>
                Hi, I&apos;m {profile.name.split(' ').slice(0, 2).join(' ')}.
                <span className="role-line">
                  <span key={role} className="role">{role}</span>
                </span>
              </h1>
              <p className="lead reveal" style={{ '--d': '160ms' }}>{profile.bio}</p>
              <div className="hero-cta reveal" style={{ '--d': '240ms' }}>
                <a href="#work" className="btn btn-brand">See my work <ArrowDown size={16} /></a>
                <button className="btn btn-ghost" onClick={() => setShowResume(true)}>Resume <FileText size={16} /></button>
              </div>
              <div className="socials reveal" style={{ '--d': '320ms' }}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="icon-btn">{s.icon}</a>
                ))}
              </div>
            </div>

            <div className="hero-art reveal" style={{ '--d': '120ms' }}>
              <div className="ring" aria-hidden="true" />
              <img src={avatar} alt={profile.name} width="520" height="520" className="avatar" fetchpriority="high" />
              <span className="float-chip c1">🧠 RAG</span>
              <span className="float-chip c2">🔐 SHA-256</span>
              <span className="float-chip c3">⛓️ Fabric</span>
              <span className="float-chip c4">📜 Solidity</span>
            </div>
          </div>

          <div className="container stats reveal">
            <div><b>5</b><span>flagship systems</span></div>
            <div><b>18</b><span>public repositories</span></div>
            <div><b>AI × Web3</b><span>where I build</span></div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="track">
            {[...marquee, ...marquee].map((m, i) => <span key={i}>{m}</span>)}
          </div>
        </div>

        {/* FEATURED */}
        <section id="work" className="section container">
          <div className="section-head reveal">
            <p className="kicker">Selected work</p>
            <h2>Systems I&apos;ve designed and shipped</h2>
          </div>

          <div className="projects">
            {featured.map((p, idx) => (
              <article key={p.id} className={`project hue-${p.hue} reveal ${idx % 2 ? 'flip' : ''}`} onMouseMove={spotlight}>
                <div className="project-copy">
                  <div className="p-meta">
                    <span className="p-num mono">0{idx + 1}</span>
                    <span className="p-kicker">{p.kicker}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p className="p-tag">{p.tagline}</p>
                  <ul className="p-points">
                    {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  <div className="tags">
                    {p.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                  <div className="p-actions">
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn-hue btn-sm">
                        <Github size={14} /> View code <ArrowUpRight size={14} />
                      </a>
                    )}
                    {p.arch && (
                      <button className="btn btn-ghost btn-sm" onClick={() => setShowArch(true)}>
                        <Network size={14} /> Architecture
                      </button>
                    )}
                  </div>
                </div>
                <div className="project-visual viz">
                  <Visual kind={p.visual} />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* MORE */}
        <section id="more" className="section container">
          <div className="section-head reveal">
            <p className="kicker">More builds</p>
            <h2>Experiments, hackathons and side quests</h2>
          </div>
          <div className="more-grid">
            {more.map((m, i) => (
              <a key={m.title} href={m.repo} target="_blank" rel="noreferrer" className="mini reveal" style={{ '--d': `${i * 60}ms` }} onMouseMove={spotlight}>
                <div className="mini-top">
                  <h4>{m.title}</h4>
                  <ArrowUpRight size={18} className="mini-arrow" />
                </div>
                <p>{m.text}</p>
                <div className="tags">{m.stack.map((s) => <span key={s}>{s}</span>)}</div>
              </a>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section container">
          <div className="section-head reveal">
            <p className="kicker">Toolbox</p>
            <h2>What I work with</h2>
          </div>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <div key={s.name} className={`skill reveal sk-${i}`} style={{ '--d': `${i * 70}ms` }}>
                <h4>{s.name}</h4>
                <div className="tags">{s.items.map((it) => <span key={it}>{it}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section container">
          <div className="contact reveal">
            <div className="blobs small" aria-hidden="true"><i /><i /></div>
            <p className="kicker">Say hello</p>
            <h2>Let&apos;s build something trustworthy.</h2>
            <p className="lead">Have a role, a hackathon or a hard problem around AI or Web3? My inbox is open.</p>
            <div className="hero-cta center">
              <a href={`mailto:${profile.email}`} className="btn btn-brand"><Mail size={16} /> {profile.email}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost"><Linkedin size={16} /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono">Built with React + Vite · lightweight by design</span>
      </footer>

      {showResume && (
        <Modal title="Resume" onClose={() => setShowResume(false)} wide>
          <iframe src={resumeUrl} title="Resume" className="resume-frame" />
          <a href={resumeUrl} download className="btn btn-brand btn-sm dl"><Download size={14} /> Download PDF</a>
        </Modal>
      )}
      {showArch && (
        <Modal title="AI Interviewer · System architecture" onClose={() => setShowArch(false)} wide>
          <img src={interviewerArch} alt="AI Interviewer system architecture: browser candidate, Node/Express backend, Supabase vector store, Deepgram speech and Groq LLM" className="arch-img" loading="lazy" />
        </Modal>
      )}
    </>
  );
}
