import React from 'react'
import ProjectItem from './ProjectItem'
import arr from './ProjectList'
import '../App.css'

function Projects() {
  return (
    <>
      <div className=' project-page' > 
        {
          arr.map((e) => {
            return <ProjectItem title={e.title} key={e.title} git={e.git} web={e.web} des={e.des} webTech={e.webTech} />
          })
        }
      </div>
    </>
  )
}

export default Projects