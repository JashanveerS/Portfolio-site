import React from 'react'
import styles from './ProjectCard.module.css'

function ProjectCard({link, src, alt, h3, p, technologies = [], description, githubLink, liveLink, animationDelay = 0}) {
  return (
    <div 
      className={styles.projectCard}
      style={{'--animation-delay': `${animationDelay}s`}}
    >
      <div className={styles.imageContainer}>
        <img className={styles.projectImage} src={src} alt={alt} />
        <div className={styles.overlay}>
          <div className={styles.overlayButtons}>
            {githubLink && (
              <a href={githubLink} target='_blank' rel='noopener noreferrer' className={styles.overlayBtn}>
                <span>Code</span>
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target='_blank' rel='noopener noreferrer' className={styles.overlayBtn}>
                <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{h3}</h3>
        <p className={styles.projectSubtitle}>{p}</p>
        {description && (
          <p className={styles.projectDescription}>{description}</p>
        )}
        
        {technologies.length > 0 && (
          <div className={styles.technologies}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
