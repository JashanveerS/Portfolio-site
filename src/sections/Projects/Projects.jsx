import React from 'react'
import styles from './ProjectsStyles.module.css'
import Viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import TastyTray from '../../assets/TastyTray.png'
import hipster from '../../assets/hipsster.png'
import SkyByte from '../../assets/SkyByte.png'
function Projects() {
  return (
    <section id = "projects" className={styles.container}>
        <h1 className='sectionTitle'>
            Projects
        </h1>
        <div className={styles.ProjectsContainer}>
        {/* TastyTray */}
            <ProjectCard link ={'https://github.com/JashanveerS/Chess-AI'}  
            src={TastyTray}
            alt ={"Tasty Tray"}
            h3={"Tasty Tray"}
            p={"Your Meal Assistant"}/>
            <ProjectCard link ={'https://github.com/Sky-Bytee/Skybyte'}
            src={SkyByte}
            alt ={"SkyByte"}
            h3={"Full-stack Cloud Storage Solution"}
            p={"SkyByte is a full-stack cloud storage solution that allows users to upload and download files, create folders, and share files with other users."}/>
          {/* Personal website */}
            

            
        </div>
    </section>
  )
}

export default Projects