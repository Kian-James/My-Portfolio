import { useEffect } from 'react';
import type { Project } from '@/types';
import styles from './ProjectModal.module.css';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [onClose]);

  const images = project.images ?? [];

  return (
    <div
      className={styles.overlay}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className={styles.modal}>
        {/* Screenshot gallery */}
        {images.length > 0 && (
          <div className={styles.gallery}>
            {images.map((src, i) => (
              <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} />
            ))}
          </div>
        )}

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles.tagAccent}`}>{project.type}</span>
              <span className={styles.tag}>{project.category}</span>
              <span
                className={`${styles.tag} ${
                  project.status === 'In Progress' ? styles.tagBlue : styles.tagGreen
                }`}
              >
                {project.status === 'In Progress' ? '⏳ In Progress' : '✓ Completed'}
              </span>
            </div>
            <h2 className={styles.title}>{project.title}</h2>
            <div className={styles.period}>{project.period}</div>
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className={styles.body}>
          <div className={styles.sectionLabel}>Overview</div>
          <p className={styles.summary}>{project.summary}</p>

          <div className={styles.sectionLabel}>Key Highlights</div>
          <ul className={styles.highlights}>
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div className={styles.sectionLabel}>Tech Stack</div>
          <div className={styles.stack}>
            {project.stack.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className={styles.links}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.linkBtn} ${styles.linkBtnGhost}`}
                >
                  GitHub ↗
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
