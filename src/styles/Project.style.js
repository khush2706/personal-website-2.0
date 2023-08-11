import styled from 'styled-components'
import { devices } from '../constants'
import { ResumeContent } from './Resume.style'

export const ProjectWrapper = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  min-height: 80vh;
  background-color: rgb(230, 218, 206);
  animation: fade_in 1s;
`
export const ProjectsContent = styled(ResumeContent)`
  margin-top: 40px;
`
export const Card = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  margin: 20px 0;
  margin-bottom: 30px;
  padding: 80px 40px;
  box-shadow: rgba(138, 131, 124, 0.23) -11.31px 11.31px 25px 0px;

  & .project-name {
    color: rgb(0, 80, 225);
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
  }

  & .tech-stacks {
    font-weight: 300;
    margin-bottom: 5px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    margin-bottom: 20px;
  }

  & .visit-project a,
  a:visited,
  a:active,
  a:focus {
    color: rgb(0, 80, 225);
    font-weight: 800;
    text-decoration: none;
  }

  & .description {
    flex: 0 0 60%;
    color: #222;
  }

  & .description li {
    margin-bottom: 10px;
  }

  & .details {
    flex: 0 0 32%;
  }

  @media ${devices.mobileL} {
    padding: 40px 44px;
    flex-wrap: wrap;
    flex-direction: column;

    & .description {
      margin-top: 30px;
    }
  }
`
