import { useRef } from 'react';
import styles from './Nav.module.css';
import { useTheme } from '../../common/ThemeContext';
import { useSiteFx } from '../../common/SiteFxContext';
import CV from '../../assets/cv.pdf';

function Nav() {
  const { theme, toggleTheme } = useTheme();
  const { playClick, showAchievement } = useSiteFx();
  const brandClicks = useRef([]);
  const dark = theme === 'dark';

  const onBrandClick = () => {
    const now = Date.now();
    brandClicks.current = [...brandClicks.current.filter((t) => now - t < 900), now];
    playClick();
    if (brandClicks.current.length >= 3) {
      brandClicks.current = [];
      showAchievement('Speedrunner', false);
    }
  };

  const handleBtnClick = (e) => playClick(e);

  return (
    <nav className={`nav ${styles.nav}`}>
      <span className="nav-brand" onClick={onBrandClick} data-cursor="link" style={{ cursor: 'pointer' }}>
        Jashanveer Singh Arora
      </span>
      <a href="#about" data-cursor="link">About</a>
      <a href="#projects" data-cursor="link">Projects</a>
      <a href="#experience" data-cursor="link">Experience</a>
      <a href="#skills" data-cursor="link">Skills</a>
      <a href="#contact" data-cursor="link">Contact</a>
      <a className="btn btn-primary" href={CV} download="Jashanveer_Singh_Arora_Resume.pdf" onClick={handleBtnClick}>
        Résumé
      </a>
      <button
        onClick={() => {
          toggleTheme();
          playClick();
        }}
        data-cursor="link"
        aria-label="Toggle dark mode"
        className={styles.darkToggle}
      >
        <span className={styles.darkToggleGlyph} style={{ background: dark ? 'var(--color-accent-300)' : 'var(--color-accent-800)' }} />
      </button>
    </nav>
  );
}

export default Nav;
