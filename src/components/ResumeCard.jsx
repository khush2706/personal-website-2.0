import { Card } from '../styles/Resume.style'

const ResumeCard = ({ content }) => {
  const {
    from = null,
    to = null,
    company = null,
    position = null,
    experience = null,
    year = null,
    organization = null,
    for: achivement = null
  } = content
  return (
    <>
      <Card>
        <div className="details">
          <h4 className="timeline">{from && to ? `${from} - ${to}` : year}</h4>
          {position && <p className="job-title">{position}</p>}
          <p className="company-name">{company ? company : organization}</p>
        </div>
        <div className="description">
          <ul>
            {experience
              ? experience?.map((item, i) => {
                  return <li key={i}>{item}</li>
                })
              : achivement?.map((item, i) => {
                  return <li key={i}>{item}</li>
                })}
          </ul>
        </div>
      </Card>
    </>
  )
}

export default ResumeCard
