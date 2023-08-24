import styled from 'styled-components'
import { devices } from '../constants'

export const StyledNavbarDesktop = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  border-bottom: 0.5px solid #dde;
  font-size: 15px;
  @media ${devices.laptop} {
    /* flex-direction: column;
    padding: 0 20px;
    justify-content: center;
    align-items: flex-start;
    border: none; */
    display: none;
  }
`

export const NavTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    text-decoration: none;
    color: black;
  }
`

export const Name = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  text-transform: capitalize;
  @media ${devices.laptop} {
    font-size: 1.2em;
    display: block;
  }
`
export const Separator = styled.span`
  margin: 0 8px;
  font-weight: 300;
  @media ${devices.laptop} {
    display: none;
  }
`
export const Role = styled.span`
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  @media ${devices.laptop} {
    font-size: 13px;
  }
`
export const NavMenuWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & a,
  a:active,
  a:focus,
  a:visited {
    text-decoration: none;
    color: #000;
    margin-left: 15px;
  }

  & .active {
    border-bottom: 2px solid rgb(0, 80, 225);
  }
  @media ${devices.laptop} {
    display: none;
  }
`
export const NavMenuItem = styled.li`
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
`

export const StyledMobileNav = styled.div`
  display: none;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #fff;
  font-size: 15px;

  & .open-nav-links {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    position: fixed;
    top: 10vh;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(244, 236, 230);
    animation: fade_in 0.5s;
  }

  & .display-none {
    display: none;
  }

  & .animate-ham span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 8.6px);
  }

  & .animate-ham span:nth-child(2) {
    opacity: 0;
  }

  & .animate-ham span:nth-child(3) {
    transform: rotate(45deg) translate(-0.5px, -8.6px) scale(0.8);
  }

  @media ${devices.laptop} {
    display: flex;
    & .open-nav-links {
      justify-content: flex-start;
      padding-top: 300px;
    }
  }

  @media ${devices.mobileL} {
    & .open-nav-links {
      padding-top: 0;
      justify-content: center;
    }
  }
`

export const NavHam = styled.div`
  & span {
    display: block;
    margin-left: auto;
    width: 22px;
    height: 2px;
    margin-bottom: 6px;
    background-color: rgb(0, 80, 225);
    color: rgb(0, 80, 225);
    transition: all 0.3s;
    border-radius: 5px;
  }

  & span:nth-child(1) {
    width: 28px;
  }

  & span:nth-child(3) {
    width: 33px;
  }
`

export const MobileNavLinks = styled.div`
  z-index: 100;
  list-style: none;

  & li {
    letter-spacing: 0.5px;
  }

  & a {
    display: block;
    color: rgb(0, 80, 225);
    font-weight: 800;
    margin: 10px;
    text-transform: uppercase;
    animation: bottom_up 0.9s;
    text-decoration: none;
  }

  & .active {
    border-bottom: 2px solid rgb(0, 80, 225);
  }
`
