import { useState, useEffect } from 'react';
import styles from './Nav.module.css';

const NAV_LINKS = [
  { href: '#about',          label: 'about' },
  { href: '#skills',         label: 'skills' },
  { href: '#projects',       label: 'projects' },
  { href: '#certifications', label: 'certs' },
  { href: '#contact',        label: 'contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#about" className={styles.logo}>
        K<span className={styles.logoAccent}>.</span>
      </a>

      {/* Desktop Links */}
      <ul className={styles.links}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className={styles.link}>{label}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle navigation"
      >
        <span /><span /><span />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={styles.mobileLink} onClick={handleLinkClick}>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
