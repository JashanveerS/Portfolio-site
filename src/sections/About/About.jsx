import { useState } from 'react';
import styles from './About.module.css';
import { useSiteFx } from '../../common/SiteFxContext';
import Stamp from '../../common/Stamp';
import headshot from '../../assets/headshot.png';
import { facts } from '../../data/content';

function About() {
  const { playClick, showAchievement, isRevealed } = useSiteFx();
  const [flipped, setFlipped] = useState(false);
  const [factIndex, setFactIndex] = useState(0);

  const flipCard = () => {
    setFlipped((f) => {
      if (f) setFactIndex((i) => (i + 1) % facts.length);
      return !f;
    });
    playClick();
  };

  const onChoreographerClick = (e) => {
    playClick(e);
    showAchievement('Coach unlocked', false);
  };

  return (
    <section
      id="about"
      data-reveal="about"
      className={styles.about}
      style={{ opacity: isRevealed('about') ? 1 : 0, transform: isRevealed('about') ? 'translateY(0)' : 'translateY(24px)' }}
    >
      <div>
        <span className={styles.kicker}>About<Stamp n="01" rotate={-7} /></span>
        <h2 className={styles.title}>
          Half engineer, half{' '}
          <span className={styles.choreographer} onClick={onChoreographerClick} data-cursor="link">
            choreographer
          </span>
          .
        </h2>
        <p className={styles.bio}>
          I&apos;m currently pursuing a B.Sc. in Computing Science (Software Practices) at the University of Alberta,
          where I also TA introductory courses and lead the campus Bhangra dance club. Outside class I build full-stack
          apps — usually with a real-time feature I didn&apos;t strictly need to add, and often with an AI assistant
          doing more work than it should. I care about clean architecture, but I care more about whether the thing
          actually feels good to use.
        </p>
      </div>
      <div className={styles.flipStage}>
        <div className={styles.flipInner} onClick={flipCard} data-cursor="link" style={{ transform: `rotateY(${flipped ? 180 : 0}deg)` }}>
          <figure className={`plate ${styles.plateFront}`}>
            <div className={styles.photoFrame}>
              <img src={headshot} alt="Jashanveer Singh Arora" draggable="false" />
            </div>
            <figcaption>Click me →</figcaption>
          </figure>
          <div className={styles.plateBack}>
            <p>{facts[factIndex]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
