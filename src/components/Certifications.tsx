import { CERTIFICATIONS } from '@/data/certifications';
import { useInView } from '@/hooks/useInView';
import styles from './Certifications.module.css';

export default function Certifications() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className={`${styles.section} ${inView ? styles.visible : ''}`} id="certifications">
      <div className={styles.label}>Credentials</div>
      <h2 className={styles.title}>Certifications</h2>

      <div className={styles.list}>
        {CERTIFICATIONS.map((cert, i) => (
          <div
            key={`${cert.issuer}-${cert.name}`}
            className={styles.item}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <span className={styles.issuer}>{cert.issuer}</span>
            <span className={styles.name}>{cert.name}</span>
            {cert.year && <span className={styles.year}>{cert.year}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
