import styles from './Experience.module.css';
import { useSiteFx } from '../../common/SiteFxContext';
import Stamp from '../../common/Stamp';
import { experience } from '../../data/content';

function Experience() {
  const { isRevealed } = useSiteFx();

  return (
    <section
      id="experience"
      data-reveal="experience"
      className={styles.experience}
      style={{ opacity: isRevealed('experience') ? 1 : 0, transform: isRevealed('experience') ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <span className={styles.kicker}>Experience &amp; leadership<Stamp n="02" rotate={5} /></span>
      <h2 className={styles.title}>What I&apos;ve been building, on and off campus</h2>
      {experience.map((e) => (
        <div key={e.role + e.org} className={styles.row}>
          <div>
            <p className={styles.role}>{e.role}</p>
            <p className={styles.org}>{e.org}</p>
            <p className={styles.meta}>{e.meta}</p>
          </div>
          <ul className={styles.bullets}>
            {e.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
