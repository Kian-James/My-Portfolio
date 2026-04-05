import { ME } from '@/data/me';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>
            K<span className={styles.accent}>.</span>
          </span>
          <span className={styles.text}>
            © {year} <span className={styles.accent}>{ME.name}</span>. All rights reserved.
          </span>
        </div>
        <div className={styles.right}>
          <span className={styles.text}>
            Built with <span className={styles.accent}>React + TypeScript</span>
          </span>
          <span className={styles.dot}>·</span>
          <span className={styles.text}>{ME.location}</span>
        </div>
      </div>
    </footer>
  );
}
