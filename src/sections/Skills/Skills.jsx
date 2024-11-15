import styles from './SkillsStyles.module.css'
import cdark from '../../assets/checkmark-dark.svg'
import clight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList.jsx'
import { useTheme } from '../../common/ThemeContext';
function Skills() {
  const {theme,toggleTheme} = useTheme();
  const CheckIcon = theme === 'light' ? clight : cdark;
  return (
    
    <section id="skills" className={styles.container}>
      
    <h1 className="sectionTitle">Skills</h1>
    <div className={styles.skillList}>
      <SkillList src={CheckIcon} skill="Python" />
      <SkillList src={CheckIcon} skill="HTML" />
      <SkillList src={CheckIcon} skill="CSS" />
      <SkillList src={CheckIcon} skill="JavaScript" />
      <SkillList src={CheckIcon} skill="C" />

    </div>
    <hr/>
    <div className={styles.skillList}>
      <SkillList src={CheckIcon} skill="React" />
      <SkillList src={CheckIcon} skill="SQL" />
      <SkillList src={CheckIcon} skill="MongoDB" />
      <SkillList src={CheckIcon} skill="Git" />
      <SkillList src={CheckIcon} skill="Node.js"/>
  
      </div>
    </section>
  );
}

export default Skills