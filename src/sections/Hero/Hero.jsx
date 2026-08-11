import styles from './HeroStyles.module.css';
import { useSiteFx } from '../../common/SiteFxContext';
import { stats, pixelRow } from '../../data/content';
import CV from '../../assets/cv.pdf';

function Hero() {
  const { playClick } = useSiteFx();

  return (
    <>
      <section id="home" className={styles.hero}>
        <span className={styles.eyebrow}>Full-Stack Developer &amp; CS Student, University of Alberta</span>
        <div className={styles.pixelRow} aria-hidden="true">
          {pixelRow.map((color, i) => (
            <span key={i} style={{ background: color, animationDelay: `${i * 0.12}s` }} />
          ))}
        </div>
        <h1 className={styles.headline}>
          <span>I build full-stack software</span>
          <span className={styles.accentLine}>with React, Node, and real-time systems.</span>
        </h1>
        <p className={styles.lede}>
          I&apos;m Jashanveer — a Computing Science student building full-stack products with React, Node and a genuine
          soft spot for real-time systems and AI-assisted tools. This page has a couple of gimmicks tucked into it. See
          if you can find them.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className="btn btn-primary" onClick={playClick}>View projects</a>
          <a href="mailto:jashanveersingharora@gmail.com" className="btn btn-ghost" onClick={playClick}>Say hello</a>
          <a href={CV} download="Jashanveer_Singh_Arora_Resume.pdf" className="btn btn-ghost" onClick={playClick}>
            Download résumé
          </a>
        </div>
        <p className={styles.cheatHint}>Psst — there&apos;s a cheat code somewhere on this page.</p>
      </section>

      <hr className="hr" style={{ margin: 0 }} />

      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.label}>
              <p className={styles.statNum} style={{ color: s.color }}>{s.num}</p>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
