import styles from './SkillsStyles.module.css'
import clight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList';
function Skills() {
  return (
    <section id="skills" className={styles.container}>
    <h1>Skills</h1>
    <div className={styles.skillList}>
      <SkillList src={clight} skill="Python" />
      <SkillList src={clight} skill="HTML" />
      <SkillList src={clight} skill="JavaScript" />
      <SkillList src={clight} skill="C" />
      <SkillList src={clight} skill="Java" />
      <SkillList src={clight} skill="React" />
      <SkillList src={clight} skill="CSS" />
      <SkillList src={clight} skill="SQL" />
      <SkillList src={clight} skill="Git" />
      <SkillList src={clight} skill="Linux" />
      <SkillList src={clight} skill="Docker" />

    </div>
    </section>
  );
}

export default Skills