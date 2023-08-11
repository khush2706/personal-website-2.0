import styled from 'styled-components'
import { devices } from '../constants'
import { ProjectWrapper } from './Project.style'

export const ContactWrapper = styled(ProjectWrapper)`
  & .success-blk {
    position: absolute;
    bottom: 125px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 20px;
    animation: bottom_up 1s;
  }

  & .display-none {
    display: none;
  }

  @media ${devices.mobileL} {
    & .success-blk {
      bottom: 60px;
      padding: 12px;
      font-size: 14px;
    }
  }
`
export const Form = styled.form`
  background-color: #fff;
  padding: 40px;

  & label {
    display: block;
    flex: 0 0 45%;
    font-weight: 800;
    margin-bottom: 50px;
    background-color: #fff;
    color: #000;
  }

  & input {
    display: block;
    width: 100%;
  }

  & input,
  & textarea {
    outline: none;
    border: 0;
    border-bottom: 1px solid #000;
    margin-top: 10px;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 0.06em;
  }

  & textarea {
    display: block;
    width: 100%;
    margin-bottom: 30px;
  }

  & .details-container {
    display: flex;
    background-color: #fff;
    justify-content: space-between;
  }

  & .send_default {
    padding: 10px 15px;
    color: #fff;
    border-radius: 15px;
    outline: none;
    transition: 0.3s;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 14px;
  }

  & .send {
    border: 1px solid rgb(0, 80, 225);
    background-color: rgb(0, 80, 225);
    cursor: pointer;
  }

  & .send_inactive {
    border: 1px solid #6a9ff6;
    background-color: #6a9fff;
    cursor: not-allowed;
  }

  @media ${devices.mobileL} {
    padding: 25px;
    & label {
      flex: 0 0 100%;
    }

    & .send {
      padding: 8px 12px;
      font-size: 12px;
    }

    & .details-container {
      flex-wrap: wrap;
    }
  }
`
