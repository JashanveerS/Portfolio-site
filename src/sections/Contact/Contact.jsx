import styles from './ContactStyles.module.css';
import { useSiteFx } from '../../common/SiteFxContext';
import Stamp from '../../common/Stamp';
import CV from '../../assets/cv.pdf';

function Contact() {
  const { playClick, isRevealed } = useSiteFx();

  return (
    <section
      id="contact"
      data-reveal="contact"
      className={styles.contact}
      style={{ opacity: isRevealed('contact') ? 1 : 0, transform: isRevealed('contact') ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <h3 className={styles.title}>
        Let&apos;s build something.
        <Stamp n="06" rotate={8} />
      </h3>
      <p className={styles.lede}>
        Open to new-grad and internship roles, freelance projects, or just a good conversation about real-time systems.
      </p>
      <div className={styles.actions}>
        <a href="mailto:jashanveersingharora@gmail.com" className="btn btn-primary" onClick={playClick}>Email me</a>
        <a href="https://www.linkedin.com/in/jashanveer/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" onClick={playClick}>
          LinkedIn
        </a>
        <a href="https://github.com/JashanveerS" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" onClick={playClick}>
          GitHub
        </a>
        <a href={CV} download="Jashanveer_Singh_Arora_Resume.pdf" className="btn btn-ghost" onClick={playClick}>Résumé</a>
      </div>
    </section>
  );
}

export default Contact;
