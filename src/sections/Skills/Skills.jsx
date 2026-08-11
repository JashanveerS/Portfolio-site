import styles from './SkillsStyles.module.css';
import { useSiteFx } from '../../common/SiteFxContext';
import Stamp from '../../common/Stamp';
import { skills } from '../../data/content';

function Skills() {
  const { isRevealed } = useSiteFx();

  return (
    <section
      id="skills"
      data-reveal="skills"
      className={styles.container}
      style={{ opacity: isRevealed('skills') ? 1 : 0, transform: isRevealed('skills') ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <span className={styles.kicker}>Technical skills<Stamp n="04" rotate={6} /></span>
      <h2 className={styles.title}>The toolbox</h2>
      <div className={styles.grid}>
        {skills.map((g) => (
          <div key={g.cat} className={styles.card}>
            <p className={styles.catTitle}>{g.cat}</p>
            <p className={styles.blurb}>{g.blurb}</p>
            <div className={styles.tags}>
              {g.items.map((it) => (
                <span key={it} className="tag tag-accent">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
