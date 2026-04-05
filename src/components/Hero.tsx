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
    </section>
  );
}