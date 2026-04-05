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

        {/* ── Left: text content ── */}
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
            <a
              href={`https://github.com/${ME.github}`}
              target="_blank"
              rel="noreferrer"
              className={`${styles.btn} ${styles.btnGhost}`}
            >
              GitHub <span aria-hidden>↗</span>
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNum}>
                {PROJECTS.length}<span className={styles.statAccent}>+</span>
              </div>
              <div className={styles.statLabel}>Projects Built</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <div className={styles.statNum}>
                {CERTIFICATIONS.length}<span className={styles.statAccent}>+</span>
              </div>
              <div className={styles.statLabel}>Certifications</div>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <div className={styles.statNum}>
                4<span className={styles.statAccent}>+</span>
              </div>
              <div className={styles.statLabel}>Years Coding</div>
            </div>
          </div>

          <div className={styles.education}>
            <span className={styles.eduIcon}>🎓</span>
            <div>
              <div className={styles.eduSchool}>{ME.school}</div>
              <div className={styles.eduDegree}>{ME.degree} · {ME.schoolPeriod}</div>
              <div className={styles.eduHonors}>
                {ME.honors.map(h => (
                  <span key={h} className={styles.honor}>{h}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: avatar circle with overflow figure ── */}
        <div className={styles.avatarWrap}>
          {/* Decorative ring */}
          <div className={styles.avatarRing} />
          {/* Circle background */}
          <div className={styles.avatarCircle}>
            {/* Coder SVG illustration — upper body overflows the circle */}
            <div className={styles.avatarFigure}>
              <svg viewBox="0 0 280 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.coderSvg}>
                {/* Laptop base */}
                <rect x="60" y="240" width="160" height="100" rx="8" fill="#1C1C1E"/>
                <rect x="65" y="245" width="150" height="85" rx="6" fill="#2C2C2E"/>
                {/* Screen glow */}
                <rect x="70" y="250" width="140" height="75" rx="4" fill="#003566"/>
                {/* Code lines on screen */}
                <rect x="80" y="262" width="60" height="4" rx="2" fill="#007AFF" opacity="0.9"/>
                <rect x="80" y="272" width="90" height="4" rx="2" fill="#34C759" opacity="0.8"/>
                <rect x="88" y="282" width="50" height="4" rx="2" fill="#FF9F0A" opacity="0.8"/>
                <rect x="88" y="292" width="70" height="4" rx="2" fill="#64D2FF" opacity="0.7"/>
                <rect x="80" y="302" width="40" height="4" rx="2" fill="#007AFF" opacity="0.6"/>
                <rect x="80" y="312" width="80" height="4" rx="2" fill="#30D158" opacity="0.5"/>
                {/* Cursor blink */}
                <rect x="126" y="302" width="3" height="10" rx="1" fill="white" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;0;0.9" dur="1.1s" repeatCount="indefinite"/>
                </rect>
                {/* Keyboard */}
                <rect x="60" y="330" width="160" height="14" rx="4" fill="#3A3A3C"/>
                <rect x="65" y="333" width="150" height="8" rx="2" fill="#48484A"/>

                {/* Body / torso */}
                <rect x="95" y="170" width="90" height="80" rx="14" fill="#007AFF"/>
                {/* Collar */}
                <path d="M125 170 Q140 185 155 170" stroke="white" stroke-width="2" fill="none"/>
                {/* Arms reaching to laptop */}
                <path d="M95 195 Q72 210 72 235" stroke="#007AFF" stroke-width="18" stroke-linecap="round"/>
                <path d="M185 195 Q208 210 208 235" stroke="#007AFF" stroke-width="18" stroke-linecap="round"/>
                {/* Hands */}
                <ellipse cx="72" cy="240" rx="12" ry="10" fill="#FBBF7A"/>
                <ellipse cx="208" cy="240" rx="12" ry="10" fill="#FBBF7A"/>

                {/* Neck */}
                <rect x="128" y="138" width="24" height="36" rx="8" fill="#FBBF7A"/>

                {/* Head — overflows above circle */}
                <ellipse cx="140" cy="112" rx="46" ry="50" fill="#FBBF7A"/>
                {/* Hair */}
                <path d="M96 100 Q100 60 140 58 Q180 60 184 100 Q175 72 140 70 Q105 72 96 100Z" fill="#1C1C1E"/>
                {/* Side burns */}
                <rect x="94" y="98" width="10" height="20" rx="5" fill="#1C1C1E"/>
                <rect x="176" y="98" width="10" height="20" rx="5" fill="#1C1C1E"/>
                {/* Eyes */}
                <ellipse cx="124" cy="110" rx="7" ry="8" fill="white"/>
                <ellipse cx="156" cy="110" rx="7" ry="8" fill="white"/>
                <ellipse cx="125" cy="112" rx="4" ry="5" fill="#1C1C1E"/>
                <ellipse cx="157" cy="112" rx="4" ry="5" fill="#1C1C1E"/>
                <circle cx="126" cy="111" r="1.5" fill="white"/>
                <circle cx="158" cy="111" r="1.5" fill="white"/>
                {/* Eyebrows */}
                <path d="M116 100 Q124 96 132 100" stroke="#1C1C1E" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <path d="M148 100 Q156 96 164 100" stroke="#1C1C1E" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                {/* Smile */}
                <path d="M128 128 Q140 138 152 128" stroke="#C87941" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                {/* Glasses */}
                <rect x="113" y="104" width="22" height="15" rx="5" stroke="#1C1C1E" stroke-width="2" fill="none"/>
                <rect x="145" y="104" width="22" height="15" rx="5" stroke="#1C1C1E" stroke-width="2" fill="none"/>
                <line x1="135" y1="111" x2="145" y2="111" stroke="#1C1C1E" stroke-width="2"/>
                <line x1="94" y1="108" x2="113" y2="110" stroke="#1C1C1E" stroke-width="2"/>
                <line x1="167" y1="110" x2="184" y2="108" stroke="#1C1C1E" stroke-width="2"/>

                {/* Floating code badges */}
                <g opacity="0.92">
                  <rect x="10" y="130" width="52" height="22" rx="8" fill="#007AFF"/>
                  <text x="36" y="145" text-anchor="middle" fill="white" font-size="10" font-family="monospace" font-weight="600">React</text>
                </g>
                <g opacity="0.88">
                  <rect x="218" y="118" width="56" height="22" rx="8" fill="#34C759"/>
                  <text x="246" y="133" text-anchor="middle" fill="white" font-size="10" font-family="monospace" font-weight="600">Flutter</text>
                </g>
                <g opacity="0.85">
                  <rect x="220" y="170" width="52" height="22" rx="8" fill="#FF9500"/>
                  <text x="246" y="185" text-anchor="middle" fill="white" font-size="10" font-family="monospace" font-weight="600">AWS</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}