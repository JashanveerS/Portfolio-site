import { useRef } from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import Stamp from '../../common/Stamp';
import { useSiteFx } from '../../common/SiteFxContext';
import { projects } from '../../data/content';

function Projects() {
  const { playClick, showAchievement, isRevealed } = useSiteFx();
  const visited = useRef([]);
  const fullyExplored = useRef(false);

  const onCardClick = (e, name) => {
    playClick(e);
    if (fullyExplored.current) return;
    if (!visited.current.includes(name)) visited.current = [...visited.current, name];
    if (visited.current.length >= projects.length) {
      fullyExplored.current = true;
      setTimeout(() => showAchievement('Fully Explored', false), 350);
    }
  };

  return (
    <section
      id="projects"
      data-reveal="projects"
      className={styles.container}
      style={{ opacity: isRevealed('projects') ? 1 : 0, transform: isRevealed('projects') ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <span className={styles.kicker}>Selected projects<Stamp n="03" rotate={-8} /></span>
      <h2 className={styles.title}>Five things I&apos;ve shipped lately</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} onClick={(e) => onCardClick(e, project.name)} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
