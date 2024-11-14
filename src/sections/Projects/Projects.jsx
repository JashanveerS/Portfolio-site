import React from 'react'
import styles from './ProjectsStyles.module.css'
import Viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import freshburg from '../../assets/fresh-burger.png'
import hipster from '../../assets/hipsster.png'
function Projects() {
  return (
    <section id = "projects" className={styles.container}>
        <h1 className='sectionTitle'>
            Projects
        </h1>
        <div className={styles.ProjectsContainer}>
            <ProjectCard link ={'https://github.com/JashanveerS/Chess-AI'} 
            src={Viberr}
            alt ={"My Chess BOT"}
            h3={"CHESS BOT"}
            p={"MY chess Bot"}/>
            <ProjectCard link ={'https://github.com/JashanveerS/jvsingh.github.io'}
            src={freshburg}
            alt ={"Fresh Burgursssss"}
            h3={"FRESH BURG"}
            p={"brufggaf"}/>
            <ProjectCard link ={'https://www.youtube.com/'}
            src={hipster}
            alt ={"youtube"}
            h3={"youtube"}
            p={"Mwef"}/>

            
        </div>
    </section>
  )
}

export default Projects