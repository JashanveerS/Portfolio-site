import styles from './Education.module.css';
import { useSiteFx } from '../../common/SiteFxContext';
import Stamp from '../../common/Stamp';

function Education() {
  const { isRevealed } = useSiteFx();

  return (
    <section
      id="education"
      data-reveal="education"
      className={styles.education}
      style={{ opacity: isRevealed('education') ? 1 : 0, transform: isRevealed('education') ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <span className={styles.kicker}>Education<Stamp n="05" rotate={-5} /></span>
      <div className={styles.row}>
        <div>
          <p className={styles.school}>University of Alberta</p>
          <p className={styles.program}>B.Sc. Computing Science — Software Practices</p>
        </div>
        <p className={styles.dates}>Sep 2023 – Present · Edmonton, CA</p>
      </div>
    </section>
  );
}

export default Education;
