import React from 'react'
function SkillList({src,skill}) {
  return (
    <div>
    <span>
    <img src= {src} alt="checkmark icon"/>
    <p>{skill}</p>
    </span>
    </div>
  )
}

export default SkillList