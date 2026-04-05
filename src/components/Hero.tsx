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

        {/* ── Right: anime coder avatar ── */}
        <div className={styles.avatarWrap}>
          <div className={styles.avatarScene}>
            <svg viewBox="0 0 420 480" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sceneSvg}>
              <defs>
                <clipPath id="circleClip">
                  <circle cx="210" cy="260" r="168"/>
                </clipPath>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E8F4FF"/>
                  <stop offset="100%" stopColor="#C8E0FF"/>
                </radialGradient>
                <radialGradient id="deskGrad" cx="50%" cy="0%" r="100%">
                  <stop offset="0%" stopColor="#4A4A5A"/>
                  <stop offset="100%" stopColor="#2C2C3A"/>
                </radialGradient>
              </defs>

              {/* ── Circle background (clipped) ── */}
              <circle cx="210" cy="260" r="168" fill="url(#bgGrad)"/>

              {/* Floor shadow inside circle */}
              <ellipse cx="210" cy="415" rx="130" ry="12" fill="rgba(0,0,0,0.08)" clipPath="url(#circleClip)"/>

              {/* ── Desk (clipped to circle bottom) ── */}
              <g clipPath="url(#circleClip)">
                {/* Desk surface */}
                <rect x="60" y="368" width="300" height="16" rx="4" fill="url(#deskGrad)"/>
                <rect x="60" y="368" width="300" height="4" rx="2" fill="rgba(255,255,255,0.18)"/>
                {/* Desk legs */}
                <rect x="80" y="384" width="10" height="44" rx="3" fill="#2C2C3A"/>
                <rect x="330" y="384" width="10" height="44" rx="3" fill="#2C2C3A"/>
                {/* Cactus pot */}
                <rect x="98" y="330" width="28" height="38" rx="4" fill="#E07B39"/>
                <rect x="98" y="330" width="28" height="6" rx="3" fill="#C96A2A"/>
                {/* Cactus */}
                <rect x="109" y="290" width="8" height="42" rx="4" fill="#4CAF50"/>
                <rect x="101" y="305" width="8" height="18" rx="4" fill="#4CAF50"/>
                <rect x="117" y="310" width="8" height="14" rx="4" fill="#4CAF50"/>
                {/* Cactus spines */}
                <line x1="105" y1="299" x2="101" y2="295" stroke="#81C784" strokeWidth="1.2"/>
                <line x1="113" y1="296" x2="117" y2="292" stroke="#81C784" strokeWidth="1.2"/>
                <line x1="109" y1="315" x2="105" y2="311" stroke="#81C784" strokeWidth="1.2"/>
              </g>

              {/* ── Laptop (partially clipped) ── */}
              <g clipPath="url(#circleClip)">
                {/* Laptop body */}
                <rect x="140" y="300" width="160" height="68" rx="6" fill="#3A3A4A"/>
                <rect x="144" y="304" width="152" height="60" rx="4" fill="#1a1a2e"/>
                {/* Screen glow effect */}
                <rect x="144" y="304" width="152" height="60" rx="4" fill="#001855" opacity="0.9"/>
                {/* Code on screen */}
                <rect x="154" y="314" width="55" height="3.5" rx="1.5" fill="#61DAFB" opacity="0.95"/>
                <rect x="154" y="322" width="80" height="3.5" rx="1.5" fill="#98C379" opacity="0.9"/>
                <rect x="162" y="330" width="45" height="3.5" rx="1.5" fill="#E5C07B" opacity="0.9"/>
                <rect x="162" y="338" width="62" height="3.5" rx="1.5" fill="#C678DD" opacity="0.85"/>
                <rect x="154" y="346" width="35" height="3.5" rx="1.5" fill="#61DAFB" opacity="0.8"/>
                <rect x="154" y="354" width="70" height="3.5" rx="1.5" fill="#98C379" opacity="0.7"/>
                {/* Cursor */}
                <rect x="226" y="346" width="2.5" height="10" rx="1" fill="white" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;0;0.9" dur="1s" repeatCount="indefinite"/>
                </rect>
                {/* Laptop hinge/base */}
                <rect x="136" y="367" width="168" height="10" rx="4" fill="#2A2A3A"/>
                <rect x="136" y="367" width="168" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
                {/* Touchpad */}
                <rect x="196" y="372" width="48" height="3" rx="1.5" fill="#1A1A2A"/>
              </g>

              {/* ── Circle border ring ── */}
              <circle cx="210" cy="260" r="168" stroke="#1C1C1E" strokeWidth="14" fill="none"/>
              {/* Inner ring highlight */}
              <circle cx="210" cy="260" r="168" stroke="rgba(255,255,255,0.12)" strokeWidth="3" fill="none"/>

              {/* ── Anime character (overflows above circle) ── */}

              {/* Chair back */}
              <rect x="178" y="295" width="64" height="80" rx="8" fill="#E07B39" opacity="0.9"/>
              <rect x="184" y="300" width="52" height="68" rx="6" fill="#F08C45" opacity="0.6"/>

              {/* Body / torso — blue jacket */}
              <path d="M158 340 Q155 310 170 295 L210 285 L250 295 Q265 310 262 340 Q255 360 210 362 Q165 360 158 340Z" fill="#1565C0"/>
              {/* Jacket shading */}
              <path d="M158 340 Q160 315 172 300 L195 292 L210 285 L210 362 Q175 360 158 340Z" fill="#0D47A1"/>
              {/* Jacket highlight */}
              <path d="M200 290 Q210 285 220 290 L218 305 Q210 300 202 305Z" fill="rgba(255,255,255,0.15)"/>
              {/* Collar */}
              <path d="M192 290 L210 310 L228 290 L218 286 L210 298 L202 286Z" fill="#E8E8E8"/>
              <path d="M210 298 L210 320" stroke="#CCC" strokeWidth="1"/>
              {/* Jacket buttons row */}
              <circle cx="210" cy="325" r="2.5" fill="#0D47A1"/>
              <circle cx="210" cy="340" r="2.5" fill="#0D47A1"/>

              {/* Left arm */}
              <path d="M162 310 Q148 325 150 350 Q152 362 162 368" stroke="#1565C0" strokeWidth="22" strokeLinecap="round" fill="none"/>
              <path d="M162 310 Q148 325 150 350 Q152 362 162 368" stroke="#0D47A1" strokeWidth="12" strokeLinecap="round" fill="none"/>
              {/* Right arm */}
              <path d="M258 310 Q272 325 270 350 Q268 362 258 368" stroke="#1565C0" strokeWidth="22" strokeLinecap="round" fill="none"/>
              <path d="M258 310 Q272 325 270 350 Q268 362 258 368" stroke="#0D47A1" strokeWidth="12" strokeLinecap="round" fill="none"/>

              {/* Hands on keyboard */}
              <ellipse cx="162" cy="372" rx="14" ry="10" fill="#FDBCB4"/>
              <ellipse cx="258" cy="372" rx="14" ry="10" fill="#FDBCB4"/>
              {/* Hand detail fingers */}
              <path d="M152 368 Q155 362 162 362 Q169 362 172 368" stroke="#F0A090" strokeWidth="1.5" fill="none"/>
              <path d="M248 368 Q251 362 258 362 Q265 362 268 368" stroke="#F0A090" strokeWidth="1.5" fill="none"/>

              {/* Neck */}
              <rect x="200" y="248" width="20" height="38" rx="8" fill="#FDBCB4"/>
              {/* Neck shadow */}
              <rect x="200" y="248" width="8" height="38" rx="6" fill="rgba(220,120,100,0.25)"/>

              {/* ── HEAD ── */}
              {/* Head shape — anime proportions */}
              <path d="M168 198 Q166 150 210 140 Q254 150 252 198 Q254 232 240 248 Q225 260 210 262 Q195 260 180 248 Q166 232 168 198Z" fill="#FDBCB4"/>
              {/* Head shading left */}
              <path d="M168 198 Q167 165 180 150 Q195 142 210 140 L210 262 Q195 260 180 248 Q166 232 168 198Z" fill="rgba(220,120,100,0.15)"/>

              {/* ── HAIR — anime spiky black ── */}
              {/* Main hair mass */}
              <path d="M168 195 Q164 155 185 138 Q200 128 210 126 Q220 128 235 138 Q256 155 252 195 Q248 168 235 152 Q222 140 210 138 Q198 140 185 152 Q172 168 168 195Z" fill="#1A1A2A"/>
              {/* Top hair */}
              <path d="M185 138 Q195 118 210 114 Q225 118 235 138 Q222 124 210 122 Q198 124 185 138Z" fill="#1A1A2A"/>
              {/* Anime hair spikes on top */}
              <path d="M200 118 Q205 96 210 90 Q208 105 215 98 Q214 112 222 104 Q218 118 228 115 Q222 126 235 122 Q228 132 235 138" fill="#1A1A2A"/>
              <path d="M200 118 Q196 100 188 96 Q192 110 183 108 Q188 120 180 122 Q186 128 180 136 Q188 132 185 138" fill="#1A1A2A"/>
              {/* Side hair strands */}
              <path d="M168 195 Q162 175 165 155 Q168 168 172 160 Q170 175 175 170 Q172 185 168 195Z" fill="#1A1A2A"/>
              <path d="M252 195 Q258 175 255 155 Q252 168 248 160 Q250 175 245 170 Q248 185 252 195Z" fill="#1A1A2A"/>
              {/* Hair highlight */}
              <path d="M200 130 Q210 124 220 130 Q215 128 210 127 Q205 128 200 130Z" fill="rgba(255,255,255,0.35)"/>

              {/* ── EYES — big anime eyes ── */}
              {/* Left eye white */}
              <ellipse cx="191" cy="202" rx="15" ry="16" fill="white"/>
              {/* Right eye white */}
              <ellipse cx="229" cy="202" rx="15" ry="16" fill="white"/>
              {/* Left iris */}
              <ellipse cx="191" cy="204" rx="11" ry="13" fill="#2C5FAF"/>
              {/* Right iris */}
              <ellipse cx="229" cy="204" rx="11" ry="13" fill="#2C5FAF"/>
              {/* Left pupil */}
              <ellipse cx="192" cy="205" rx="6" ry="8" fill="#0A0A1A"/>
              {/* Right pupil */}
              <ellipse cx="230" cy="205" rx="6" ry="8" fill="#0A0A1A"/>
              {/* Eye shine left */}
              <ellipse cx="186" cy="199" rx="3.5" ry="4" fill="white" opacity="0.95"/>
              <circle cx="195" cy="209" r="1.5" fill="white" opacity="0.7"/>
              {/* Eye shine right */}
              <ellipse cx="224" cy="199" rx="3.5" ry="4" fill="white" opacity="0.95"/>
              <circle cx="233" cy="209" r="1.5" fill="white" opacity="0.7"/>
              {/* Eye outline / lashes */}
              <path d="M176 196 Q191 188 206 196" stroke="#1A1A2A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M214 196 Q229 188 244 196" stroke="#1A1A2A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              {/* Lower lash lines */}
              <path d="M178 210 Q191 218 204 210" stroke="#1A1A2A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M216 210 Q229 218 242 210" stroke="#1A1A2A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>

              {/* ── EYEBROWS — thick anime style ── */}
              <path d="M177 188 Q191 180 205 186" stroke="#1A1A2A" strokeWidth="4" strokeLinecap="round" fill="none"/>
              <path d="M215 186 Q229 180 243 188" stroke="#1A1A2A" strokeWidth="4" strokeLinecap="round" fill="none"/>

              {/* ── NOSE ── */}
              <path d="M207 220 Q210 226 213 220" stroke="#E09080" strokeWidth="1.8" strokeLinecap="round" fill="none"/>

              {/* ── MOUTH — anime smile ── */}
              <path d="M196 236 Q210 248 224 236" stroke="#D07060" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              {/* Teeth */}
              <path d="M200 238 Q210 246 220 238 Q210 244 200 238Z" fill="white" opacity="0.8"/>

              {/* Cheek blush */}
              <ellipse cx="178" cy="222" rx="9" ry="6" fill="#FFB3A0" opacity="0.45"/>
              <ellipse cx="242" cy="222" rx="9" ry="6" fill="#FFB3A0" opacity="0.45"/>

              {/* Ear left */}
              <ellipse cx="167" cy="212" rx="7" ry="9" fill="#FDBCB4"/>
              <ellipse cx="167" cy="212" rx="4" ry="6" fill="#F0A090"/>
              {/* Ear right */}
              <ellipse cx="253" cy="212" rx="7" ry="9" fill="#FDBCB4"/>
              <ellipse cx="253" cy="212" rx="4" ry="6" fill="#F0A090"/>

              {/* ── Floating tech badges ── */}
              {/* CSS badge - left */}
              <g className="badgeCSS">
                <rect x="42" y="155" width="68" height="52" rx="10" fill="#264DE4"/>
                <rect x="42" y="155" width="68" height="52" rx="10" stroke="white" strokeWidth="1.5" strokeOpacity="0.3"/>
                <text x="76" y="186" textAnchor="middle" fill="white" fontSize="15" fontFamily="monospace" fontWeight="800" letterSpacing="1">CSS</text>
                {/* Chat bubble tail */}
                <path d="M76 207 L68 220 L84 207Z" fill="#264DE4"/>
              </g>

              {/* Code badge - left lower */}
              <g className="badgeCode">
                <rect x="30" y="240" width="72" height="52" rx="10" fill="#1A237E"/>
                <rect x="30" y="240" width="72" height="52" rx="10" stroke="white" strokeWidth="1.5" strokeOpacity="0.3"/>
                <text x="66" y="271" textAnchor="middle" fill="white" fontSize="13" fontFamily="monospace" fontWeight="800">{"</>"}</text>
                <path d="M66 292 L58 305 L74 292Z" fill="#1A237E"/>
              </g>

              {/* HTML badge - right */}
              <g className="badgeHTML">
                <rect x="308" y="148" width="80" height="52" rx="10" fill="#E34C26"/>
                <rect x="308" y="148" width="80" height="52" rx="10" stroke="white" strokeWidth="1.5" strokeOpacity="0.3"/>
                <text x="348" y="179" textAnchor="middle" fill="white" fontSize="13" fontFamily="monospace" fontWeight="800" letterSpacing="1">HTML</text>
                <path d="M348 200 L340 213 L356 200Z" fill="#E34C26"/>
              </g>

              {/* React badge - right lower */}
              <g className="badgeReact">
                <rect x="316" y="235" width="76" height="52" rx="10" fill="#20232A"/>
                <rect x="316" y="235" width="76" height="52" rx="10" stroke="#61DAFB" strokeWidth="1.5" strokeOpacity="0.7"/>
                <text x="354" y="266" textAnchor="middle" fill="#61DAFB" fontSize="12" fontFamily="monospace" fontWeight="800">React</text>
                <path d="M354 287 L346 300 L362 287Z" fill="#20232A"/>
              </g>

              {/* Gear icons */}
              <text x="126" y="260" fontSize="22" fill="#1C1C1E" opacity="0.35">⚙</text>
              <text x="290" y="310" fontSize="18" fill="#1C1C1E" opacity="0.28">⚙</text>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}