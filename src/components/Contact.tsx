import { ME } from '@/data/me';
import { useInView } from '@/hooks/useInView';
import styles from './Contact.module.css';

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

export default function Contact() {
  const { ref, inView } = useInView<HTMLElement>();

  const items: ContactItem[] = [
    { label: 'Email', value: ME.email, href: `mailto:${ME.email}` },
    { label: 'GitHub', value: `github.com/${ME.github}`, href: `https://github.com/${ME.github}` },
    { label: 'Location', value: ME.location },
    { label: 'Education', value: `${ME.school} · ${ME.schoolPeriod}` },
  ];

  return (
    <section ref={ref} className={`${styles.section} ${inView ? styles.visible : ''}`} id="contact">
      <div className={styles.label}>Let's Connect</div>
      <h2 className={styles.title}>
        Get in <span className={styles.dim}>Touch</span>
      </h2>

      <p className={styles.intro}>
        I'm always open to new projects, collaborations, or just a good conversation
        about tech. Feel free to reach out.
      </p>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <div key={item.label} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className={styles.cardLabel}>{item.label}</div>
            {item.href ? (
              <a
                href={item.href}
                className={styles.cardValue}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {item.value}
              </a>
            ) : (
              <span className={`${styles.cardValue} ${styles.cardValueStatic}`}>
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <a href={`mailto:${ME.email}`} className={styles.ctaBtn}>
          Send me an email →
        </a>
      </div>
    </section>
  );
}
