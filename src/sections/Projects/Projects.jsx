import React from 'react'
import styles from './ProjectsStyles.module.css'
import Viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import TastyTray from '../../assets/TastyTray.png'
import hipster from '../../assets/hipsster.png'
import SkyByte from '../../assets/SkyByte.png'
import Pulsechain from '../../assets/Pulsechain.png'

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Whimsy",
      subtitle: "Android Social Media App",
      description: "A mood-based social media app with journals, follows, and real-time comments. Features dynamic content feeds, interactive mood maps, and AI-generated images from user prompts.",
      image: Viberr,
      alt: "Whimsy Social Media App",
      technologies: ["Java", "Android Studio", "Firebase", "DALL-E API", "Realtime Database", "RESTful APIs"],
      githubLink: "https://github.com/cmput301-w25/project-bugoff",
      liveLink: null
    },
    {
      id: 2,
      title: "PulseChain",
      subtitle: "Hyperlocal Blood Donation Platform",
      description: "A real-time blood donor-recipient matching app with location-based matching, urgency scoring, and gamified user experience with donor leaderboards.",
      image: Pulsechain,
      alt: "PulseChain Blood Donation App",
      technologies: ["React.js", "React Native", "Node.js", "PostgreSQL", "Socket.io", "Google Maps SDK"],
      githubLink: "https://github.com/orgs/PulseChain-org/repositories",
      liveLink: null
    },
    {
      id: 3,
      title: "TastyTray",
      subtitle: "AI-Powered Meal Planning Assistant",
      description: "A smart meal planning application that uses AI to suggest personalized recipes based on dietary preferences, available ingredients, and nutritional goals.",
      image: TastyTray,
      alt: "TastyTray App Screenshot",
      technologies: ["React", "Node.js", "MongoDB", "OpenAI API", "Express"],
      githubLink: "https://github.com/JashanveerS/TastyTray",
      liveLink: null
    },
    {
      id: 4,
      title: "SkyByte",
      subtitle: "Full-Stack Cloud Storage Solution",
      description: "A comprehensive cloud storage platform with file management, sharing capabilities, and secure user authentication. Built with modern web technologies.",
      image: SkyByte,
      alt: "SkyByte Cloud Storage",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
      githubLink: "https://github.com/Sky-Bytee/Skybyte",
      liveLink: null
    }
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>
        Projects
      </h1>
      <div className={styles.ProjectsContainer}>
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.id}
            src={project.image}
            alt={project.alt}
            h3={project.title}
            p={project.subtitle}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            animationDelay={index * 0.2}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects