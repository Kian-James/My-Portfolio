import { SKILLS } from '@/data/skills';
import { useInView } from '@/hooks/useInView';
import styles from './Skills.module.css';

export default function Skills() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className={`${styles.section} ${inView ? styles.visible : ''}`} id="skills">
      <div className={styles.header}>
        <div className={styles.label}>What I Work With</div>
        <h2 className={styles.title}>
          Technical <span className={styles.dim}>Skills</span>
        </h2>
      </div>
      <div className={styles.grid}>
        {SKILLS.map((skill, i) => (
          <div
            key={skill.name}
            className={styles.card}
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <span className={styles.icon} role="img" aria-label={skill.name}>
              {skill.icon}
            </span>
            <div className={styles.name}>{skill.name}</div>
            <div className={styles.desc}>{skill.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
