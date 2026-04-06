/// <reference types="react" />
import { ME } from '@/data/me';
import { PROJECTS } from '@/data/projects';
import { CERTIFICATIONS } from '@/data/certifications';
import styles from './Hero.module.css';

export default function Hero() {
  const firstName = ME.name.split(' ')[0];
  const restName = ME.name.split(' ').slice(1).join(' ');

  return (
    <section className={styles.hero} id="about">
      <div className={styles.inner}>

        {/* ── Left ── */}
        <div className={styles.content}>
          <div className={styles.tag}>
            <span className={styles.pulse} />
            Available for work
          </div>
          <h1 className={styles.name}>
            {firstName}
            <span className={styles.nameDim}>{restName}</span>
          </h1>
          <p className={styles.title}>{ME.title}</p>
          <p className={styles.summary}>{ME.summary}</p>
          <div className={styles.ctas}>
            <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
              View Projects <span aria-hidden>→</span>
            </a>
            <a href={`mailto:${ME.email}`} className={`${styles.btn} ${styles.btnGhost}`}>
              Get in Touch
            </a>
            <a href={`https://github.com/${ME.github}`} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnGhost}`}>
              GitHub <span aria-hidden>↗</span>
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNum}>{PROJECTS.length}<span className={styles.statAccent}>+</span></div>
              <div className={styles.statLabel}>Projects Built</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <div className={styles.statNum}>{CERTIFICATIONS.length}<span className={styles.statAccent}>+</span></div>
              <div className={styles.statLabel}>Certifications</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <div className={styles.statNum}>4<span className={styles.statAccent}>+</span></div>
              <div className={styles.statLabel}>Years Coding</div>
            </div>
          </div>
          <div className={styles.education}>
            <span className={styles.eduIcon}>🎓</span>
            <div>
              <div className={styles.eduSchool}>{ME.school}</div>
              <div className={styles.eduDegree}>{ME.degree} · {ME.schoolPeriod}</div>
              <div className={styles.eduHonors}>
                {ME.honors.map(h => <span key={h} className={styles.honor}>{h}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: avatar + orbiting chat bubbles ── */}
        <div className={styles.avatarWrap}>

          {/* Outer orbit ring (visual only) */}
          <div className={styles.orbitRing} />

          {/* Center circle with image */}
          <div className={styles.avatarCircle}>
            <img src="/avatar.avif" alt="Coder illustration" className={styles.avatarImg} />
          </div>

          {/* ── Chat bubble badges ── */}

          {/* React — top */}
          <div className={`${styles.bubble} ${styles.bubbleTop}`}>
            <span className={styles.bubbleIcon} style={{background:'#20232A'}}>
              <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
                <ellipse cx="20" cy="20" rx="4" ry="4" fill="#61DAFB"/>
                <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="2.2" fill="none"/>
                <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="2.2" fill="none" transform="rotate(60 20 20)"/>
                <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="2.2" fill="none" transform="rotate(120 20 20)"/>
              </svg>
            </span>
            <div className={styles.bubbleText}>
              <span className={styles.bubbleName}>React</span>
              <span className={styles.bubbleSub}>Frontend UI</span>
            </div>
            <div className={`${styles.bubbleTail} ${styles.tailBottom}`} />
          </div>

          {/* Flutter — top right */}
          <div className={`${styles.bubble} ${styles.bubbleTopRight}`}>
            <span className={styles.bubbleIcon} style={{background:'#0553B1'}}>
              <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
                <path d="M8 24L20 4L32 4L16 24Z" fill="#54C5F8"/>
                <path d="M16 24L28 36L20 36L8 24Z" fill="#01579B"/>
                <path d="M16 24L24 32L28 36L16 24Z" fill="#29B6F6"/>
                <path d="M28 36L20 28L16 24L28 12L32 16Z" fill="#54C5F8"/>
              </svg>
            </span>
            <div className={styles.bubbleText}>
              <span className={styles.bubbleName}>Flutter</span>
              <span className={styles.bubbleSub}>Mobile Apps</span>
            </div>
            <div className={`${styles.bubbleTail} ${styles.tailLeft}`} />
          </div>

          {/* Firebase — right */}
          <div className={`${styles.bubble} ${styles.bubblebottomRight}`}>
            <span className={styles.bubbleIcon} style={{background:'#1B1B1B'}}>
              <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
                <path d="M8 30L14 8L22 20L8 30Z" fill="#FFA000"/>
                <path d="M22 20L26 10L32 30L22 20Z" fill="#F57C00"/>
                <path d="M8 30L22 20L32 30L20 36L8 30Z" fill="#FFCA28"/>
                <path d="M26 10L22 20L32 30L26 10Z" fill="#FFA000"/>
              </svg>
            </span>
            <div className={styles.bubbleText}>
              <span className={styles.bubbleName}>Firebase</span>
              <span className={styles.bubbleSub}>Backend & DB</span>
            </div>
            <div className={`${styles.bubbleTail} ${styles.tailLeft}`} />
          </div>

          {/* MongoDB — bottom center (opposite React) */}
          <div className={`${styles.bubble} ${styles.bubbleBottom}`}>
            <span className={styles.bubbleIcon} style={{background:'#001E2B'}}>
              <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
                <path d="M20 4C20 4 12 14 12 22C12 30 20 36 20 36C20 36 28 30 28 22C28 14 20 4 20 4Z" fill="#00ED64"/>
                <rect x="18.5" y="30" width="3" height="8" rx="1.5" fill="#00684A"/>
              </svg>
            </span>
            <div className={styles.bubbleText}>
              <span className={styles.bubbleName}>MongoDB</span>
              <span className={styles.bubbleSub}>MERN Stack</span>
            </div>
            <div className={`${styles.bubbleTail} ${styles.tailTop}`} />
          </div>

          {/* Node.js — bottom left (opposite Flutter) */}
          <div className={`${styles.bubble} ${styles.bubbleBottomLeft}`}>
            <span className={styles.bubbleIcon} style={{background:'#1A1A1A'}}>
              <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
                <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" fill="#3C873A"/>
                <path d="M20 4L34 12V28L20 36V4Z" fill="#3C873A"/>
                <path d="M20 4L34 12V28L20 36V4Z" fill="rgba(255,255,255,0.08)"/>
                <text x="13" y="26" fill="white" fontSize="12" fontWeight="bold" fontFamily="monospace">JS</text>
              </svg>
            </span>
            <div className={styles.bubbleText}>
              <span className={styles.bubbleName}>Node.js</span>
              <span className={styles.bubbleSub}>Express API</span>
            </div>
            <div className={`${styles.bubbleTail} ${styles.tailRight}`} />
          </div>

          {/* AWS — top left */}
          <div className={`${styles.bubble} ${styles.bubbleTopLeft}`}>
            <span className={styles.bubbleIcon} style={{background:'#232F3E'}}>
              <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
                <path d="M12 26C8 24 6 20 8 16C9 13 12 11 15 12C16 9 19 7 22 8C25 9 27 12 26 15C29 15 31 17 31 20C31 23 29 25 26 26H12Z" fill="#FF9900"/>
                <path d="M10 30L8 28M20 32V30M30 30L32 28" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div className={styles.bubbleText}>
              <span className={styles.bubbleName}>AWS</span>
              <span className={styles.bubbleSub}>Cloud Infra</span>
            </div>
            <div className={`${styles.bubbleTail} ${styles.tailRight}`} />
          </div>

        </div>
      </div>
    </section>
  );
}