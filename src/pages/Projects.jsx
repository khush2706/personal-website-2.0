import { Heading } from '../styles/Resume.style'
import { GeometricShape } from '../styles/Containers.style'
import ProjectCard from '../components/ProjectCard'
import projects from '../assets/portfolio-data/projects.json'
import { useState, useEffect } from 'react'
import { ProjectWrapper, ProjectsContent } from '../styles/Project.style'

const Projects = () => {
  const [project, setProject] = useState(null)

  useEffect(() => {
    setProject(projects)
  }, [projects])

  return (
    <>
      <ProjectWrapper>
        <Heading>
          <GeometricShape />
          <h1>Projects</h1>
        </Heading>
        <ProjectsContent>
          {project?.map((data, index) => {
            return <ProjectCard project={data} key={index} />
          })}
        </ProjectsContent>
      </ProjectWrapper>
    </>
  )
}

export default Projects
