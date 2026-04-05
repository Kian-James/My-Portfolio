/// <reference types="react" />
/// <reference types="react-dom" />
import { useEffect, useState } from 'react';
import type { Project } from '@/types';
import styles from './ProjectModal.module.css';

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = project.images ?? [];

  // Lock body scroll
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) setLightboxIndex(null);
        else onClose();
      }
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight') setLightboxIndex(i => i !== null ? (i + 1) % images.length : null);
        if (e.key === 'ArrowLeft')  setLightboxIndex(i => i !== null ? (i - 1 + images.length) % images.length : null);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handler);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [onClose, lightboxIndex, images.length]);

  const prev = () => setLightboxIndex(i => i !== null ? (i - 1 + images.length) % images.length : null);
  const next = () => setLightboxIndex(i => i !== null ? (i + 1) % images.length : null);

  return (
    <>
      <div
        className={styles.overlay}
        onClick={(e) => e.target === e.currentTarget && onClose()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <div className={styles.modal}>
          <div className={styles.scroll}>

            {/* Screenshot gallery */}
            {images.length > 0 && (
              <div className={styles.gallery}>
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    onClick={() => setLightboxIndex(i)}
                    title="Click to enlarge"
                  />
                ))}
              </div>
            )}

            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.tags}>
                  <span className={`${styles.tag} ${styles.tagAccent}`}>{project.type}</span>
                  <span className={styles.tag}>{project.category}</span>
                  <span className={`${styles.tag} ${project.status === 'In Progress' ? styles.tagBlue : styles.tagGreen}`}>
                    {project.status === 'In Progress' ? '⏳ In Progress' : '✓ Completed'}
                  </span>
                </div>
                <h2 className={styles.title}>{project.title}</h2>
                <div className={styles.period}>{project.period}</div>
              </div>
              <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>
            </div>

            {/* Body */}
            <div className={styles.body}>
              <div className={styles.sectionLabel}>Overview</div>
              <p className={styles.summary}>{project.summary}</p>

              <div className={styles.sectionLabel}>Key Highlights</div>
              <ul className={styles.highlights}>
                {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
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
                    <a href={project.githubUrl} target="_blank" rel="noreferrer"
                      className={`${styles.linkBtn} ${styles.linkBtnGhost}`}>GitHub ↗</a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer"
                      className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}>Live Demo ↗</a>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          onClick={() => setLightboxIndex(null)}
        >
          <img
            src={images[lightboxIndex]}
            alt={`Screenshot ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          <button className={styles.lightboxClose} onClick={() => setLightboxIndex(null)}>✕</button>

          {images.length > 1 && (
            <>
              <button className={styles.lightboxPrev} onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
              <button className={styles.lightboxNext} onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
              <div className={styles.lightboxDots}>
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.lightboxDot} ${i === lightboxIndex ? styles.lightboxDotActive : ''}`}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}