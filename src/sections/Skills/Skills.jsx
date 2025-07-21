import styles from './SkillsStyles.module.css'
import cdark from '../../assets/checkmark-dark.svg'
import clight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList.jsx'
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const {theme} = useTheme();
  const CheckIcon = theme === 'light' ? clight : cdark;
  
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills & Technologies</h1>
      
      <div className={styles.skillsList}>
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Core Languages & Frameworks</h3>
          <div className={styles.skillList}>
            <SkillList src={CheckIcon} skill="Python" />
            <SkillList src={CheckIcon} skill="Java" />
            <SkillList src={CheckIcon} skill="TypeScript" />
            <SkillList src={CheckIcon} skill="JavaScript" />
            <SkillList src={CheckIcon} skill="React" />
            <SkillList src={CheckIcon} skill="Next.js" />
            <SkillList src={CheckIcon} skill="Flask" />
            <SkillList src={CheckIcon} skill="TailwindCSS" />
          </div>
        </div>

        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Backend & Databases</h3>
          <div className={styles.skillList}>
            <SkillList src={CheckIcon} skill="Supabase (PostgreSQL)" />
            <SkillList src={CheckIcon} skill="MongoDB" />
            <SkillList src={CheckIcon} skill="Firebase" />
            <SkillList src={CheckIcon} skill="Appwrite" />
            <SkillList src={CheckIcon} skill="WebSockets" />
            <SkillList src={CheckIcon} skill="Socket.io" />
          </div>
        </div>
        
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Mobile & Security</h3>
          <div className={styles.skillList}>
            <SkillList src={CheckIcon} skill="Android Studio" />
            <SkillList src={CheckIcon} skill="Firebase Cloud Messaging" />
            <SkillList src={CheckIcon} skill="2FA" />
            <SkillList src={CheckIcon} skill="OTP Authentication" />
            <SkillList src={CheckIcon} skill="Flask-Login" />
          </div>
        </div>

        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>AI & APIs</h3>
          <div className={styles.skillList}>
            <SkillList src={CheckIcon} skill="OpenAI (GPT, DALL-E)" />
            <SkillList src={CheckIcon} skill="Google Gemini" />
            <SkillList src={CheckIcon} skill="Google Maps SDK" />
            <SkillList src={CheckIcon} skill="TheMealDB API" />
          </div>
        </div>
        
        <div className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>Development Tools</h3>
          <div className={styles.skillList}>
            <SkillList src={CheckIcon} skill="Git & GitHub" />
            <SkillList src={CheckIcon} skill="Vite" />
            <SkillList src={CheckIcon} skill="CI/CD Pipelines" />
            <SkillList src={CheckIcon} skill="C" />
            <SkillList src={CheckIcon} skill="SQL" />
            <SkillList src={CheckIcon} skill="RISC-V" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
