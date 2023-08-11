import {
  NavHam,
  StyledMobileNav,
  Name,
  NavTitleWrapper,
  Role,
  Separator,
  MobileNavLinks,
  NavMenuItem
} from '../../styles/Navbar.style'
import { GeometricShape } from '../../styles/Containers.style'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const MobileNavbar = () => {
  const [menuOpen, setMenu] = useState(false)

  const toggleMenu = () => {
    if (menuOpen) {
      setMenu(false)
      document.body.style.overflow = 'scroll'
    } else {
      setMenu(true)
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <>
      <StyledMobileNav>
        <NavTitleWrapper>
          <GeometricShape />
          <div>
            <Link to="/">
              <Name>khushboo chaturvedi</Name>
            </Link>
            <Separator>/</Separator>
            <Role>software developer</Role>
          </div>
        </NavTitleWrapper>
        <NavHam onClick={toggleMenu} className={menuOpen ? 'animate-ham' : ''}>
          <span></span>
          <span></span>
          <span></span>
        </NavHam>
        <MobileNavLinks className={menuOpen ? 'open-nav-links' : 'display-none'}>
          <NavLink to="/">
            <NavMenuItem onClick={toggleMenu}>about me</NavMenuItem>
          </NavLink>
          <NavLink to="/resume">
            <NavMenuItem onClick={toggleMenu}>resume</NavMenuItem>
          </NavLink>
          <NavLink to="/projects">
            <NavMenuItem onClick={toggleMenu}>projects</NavMenuItem>
          </NavLink>
          <NavLink to="/contact">
            <NavMenuItem onClick={toggleMenu}>contact</NavMenuItem>
          </NavLink>
        </MobileNavLinks>
      </StyledMobileNav>
    </>
  )
}

export default MobileNavbar
