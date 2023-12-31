import { Card } from '../styles/Project.style'

const ProjectCard = ({ project }) => {
  return (
    <>
      <Card>
        <div className="details">
          <h3 className="project-name">{project.name}</h3>
          <p className="tech-stacks">
            <strong>Technologies</strong> - {project.techstacks}
          </p>
          <p className="visit-project">
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              Visit Project
            </a>
          </p>
        </div>
        <div className="description">
          <ul>
            {project.description.map((elem, i) => (
              <li key={i}>{elem}</li>
            ))}
          </ul>
        </div>
      </Card>
    </>
  )
}

export default ProjectCard
