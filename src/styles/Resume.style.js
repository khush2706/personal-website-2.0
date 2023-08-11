import styled from 'styled-components'
import { devices } from '../constants'

export const ResumeWrapper = styled.div`
  min-height: 80vh;
  background-color: rgb(230, 218, 206);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  animation: fade_in 1s;

  @media ${devices.mobileL} {
    padding: 50px 0;
  }
`

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    font-size: 35px;
  }

  @media ${devices.mobileL} {
    & h1 {
      font-size: 29px;
    }
  }
`

export const SubHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 40px;

  @media ${devices.mobileL} {
    margin-top: 40px;
    & h2 {
      font-size: 18px;
    }
  }
`

export const ResumeContent = styled.div`
  width: 50%;
  @media ${devices.laptop} {
    width: 80%;
  }
  @media ${devices.tablet} {
    width: 90%;
  }
`
export const Card = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  margin: 20px 0;
  margin-bottom: 30px;
  padding: 80px 40px;
  box-shadow: rgba(138, 131, 124, 0.23) -11.31px 11.31px 25px 0px;

  & .details {
    flex: 0 0 35%;
  }

  & .timeline {
    color: rgb(0, 80, 225);
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 5px;
  }

  & .job-title {
    margin-bottom: 5px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 300;
  }

  & .company-name {
    font-weight: 700;
  }

  & .description {
    flex: 0 0 60%;
    color: #222;
  }

  & .description li {
    margin-bottom: 10px;
  }

  @media ${devices.mobileL} {
    padding: 40px 44px;
    flex-wrap: wrap;
    flex-direction: column;

    & .description {
      margin-top: 20px;
    }
  }
`
