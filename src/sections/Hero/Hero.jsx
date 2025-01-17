import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import glight from '../../assets/github-light.svg';
import gdark from '../../assets/github-dark.svg';
import Llight from '../../assets/linkedin-light.svg';
import LDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
  const {theme,toggleTheme} = useTheme();
  
  const themeIcon = theme === 'light' ? sun : moon;
  const gitIcon = theme === 'light' ? glight : gdark;
  const LinkedIcon = theme === 'light' ? Llight : LDark;
  
  return (
    
    <section id = "hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
    <img 
      className={styles.hero} 
      src={heroImg} 
      alt="Profile Picture of Jashanveer"
    />
    <img 
    className={styles.colorMode} 
    src={themeIcon} 
    alt='Color Mode Icon'
    onClick={toggleTheme} 
    />
    </div>

  <div className={styles.info}>
    <h1>
      Hi, 
      <br/> 
      I'm Jashanveer Singh
    </h1>
    <h2>Student-Full Stack Developer</h2>
    <span>
      <a href="https://github.com/JashanveerS" target="_blank">
      <img src={gitIcon} alt="Github"/>
      </a>

      <a href="https://www.linkedin.com/in/jashanveer/" target="_blank">
      <img className={styles.info}
      src={LinkedIcon} alt="LinkedIn"/>
      </a>
      </span>
      <p className={styles.description}>
        I'm A 2ⁿᵈ Year Student at the University of Alberta, I am passionate about web development and software development. I am always looking for new opportunities to learn and grow.
      </p>
      <p className={styles.description}>
        (Currently exploring Java and RISC-V)
      </p>
      <a href={CV} download>
        <button className="hover">
          Resume
          </button>
      </a>
    
  </div>
  </section>
  );
}

export default Hero;