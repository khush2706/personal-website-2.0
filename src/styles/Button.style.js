import styled from 'styled-components'
import { devices } from '../constants'

export const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : '125px')};
  height: 35px;
  text-align: center;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  transition: all 0.4s;
  margin-right: 10px;
  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : 'rgb(0, 80, 225)'};
  color: ${(props) => (props.color ? props.color : '#fff')};
  border: ${(props) => (props.border ? props.border : '2px solid rgb(0, 80, 225)')};

  & a,
  & a:visited,
  & a:focus,
  & a:active {
    text-decoration: none;
    color: ${(props) => (props.color ? props.color : '#fff')};
  }

  @media ${devices.tablet} {
    height: 40px;
  }

  @media ${devices.mobileL} {
    width: 120px;
    height: 33px;
    font-size: ${(props) => (props.size ? props.size : '14px')};
  }
`
