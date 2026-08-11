import styles from './ProjectCard.module.css';

function ProjectCard({ project, onClick }) {
  const { name, kicker, tint, image, desc, bullets, tags, link } = project;

  return (
    <div
      className={`card elev-sm ${styles.card}`}
      style={{ borderTopColor: tint, '--tint': tint }}
      onClick={onClick}
      data-cursor="link"
    >
      {image ? (
        <img className={styles.shot} src={image} alt={`${name} preview`} />
      ) : (
        <div className={styles.shotPlaceholder} style={{ background: `linear-gradient(135deg, ${tint}, var(--color-surface))` }}>
          <span>{name}</span>
        </div>
      )}
      <div className={styles.body}>
        <span className="card-kicker" style={{ color: tint }}>{kicker}</span>
        <p className="card-title">{name}</p>
        <p className="card-body">{desc}</p>
        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className={styles.tags}>
          {tags.map((t) => (
            <span key={t} className="tag tag-outline">{t}</span>
          ))}
        </div>
        <div className="card-meta">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>View repo ↗</a>
          ) : (
            <span>Client project — code under NDA</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
