import React from 'react'

function ProjectCard({link,src,alt,h3,p}) {
  return (
    <a href = {link} target='_blank'>
    <img className='hover' src={src} alt={alt} />
    <h3>{h3}</h3>
    <p>{p}</p>
    </a>
    );
};

export default ProjectCard;