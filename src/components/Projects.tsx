import { useState } from 'react';
import type { Project } from '@/types';
import { PROJECTS } from '@/data/projects';
import { useInView } from '@/hooks/useInView';
import ProjectModal from './ProjectModal';
import styles from './Projects.module.css';

type Category = 'All' | 'Web' | 'Mobile';
const CATEGORIES: Category[] = ['All', 'Web', 'Mobile'];

function ProjectCard({
  project,
  onClick,
  index,
}: {
  project: Project;
  onClick: () => void;
  index: number;
}) {
  // Mobile projects are portrait screenshots — show more in the scrollable strip
  const previewCount = project.category === 'Mobile' ? 8 : 3;
  const previewImgs = project.images?.slice(0, previewCount) ?? [];

  return (
    <article
      className={styles.card}
      onClick={onClick}
      style={{ animationDelay: `${index * 0.08}s` }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View ${project.title} details`}
    >
      {previewImgs.length > 0 && (
        <div className={styles.cardImages}>
          {previewImgs.map((src, i) => (
            <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} />
          ))}
        </div>
      )}

      <div className={styles.cardTop}>
        <div className={styles.cardTags}>
          <span className={`${styles.tag} ${styles.tagAccent}`}>{project.type}</span>
          <span className={styles.tag}>{project.category}</span>
        </div>
        <span className={styles.arrow} aria-hidden>↗</span>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <div className={styles.cardPeriod}>{project.period}</div>
        <p className={styles.cardSummary}>{project.summary}</p>

        <div className={styles.cardFooter}>
          <div className={styles.cardStack}>
            {project.stack.slice(0, 3).map((t) => (
              <span key={t} className={styles.stackTag}>{t}</span>
            ))}
            {project.stack.length > 3 && (
              <span className={styles.stackTag}>+{project.stack.length - 3}</span>
            )}
          </div>
          <span
            className={`${styles.status} ${
              project.status === 'In Progress' ? styles.statusBlue : styles.statusGreen
            }`}
          >
            {project.status === 'In Progress' ? '⏳' : '✓'}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Category>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const { ref, inView } = useInView<HTMLElement>();

  const filtered =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section ref={ref} className={`${styles.section} ${inView ? styles.visible : ''}`} id="projects">
      <div className={styles.header}>
        <div>
          <div className={styles.label}>What I've Built</div>
          <h2 className={styles.title}>
            Projects <span className={styles.dim}>& Work</span>
          </h2>
        </div>

        <div className={styles.filters} role="group" aria-label="Filter projects by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ''}`}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <p>No projects in this category yet.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      )}

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}