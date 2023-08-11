import styled from 'styled-components'
import { devices } from '../constants'
import { StyledNavbarDesktop } from './Navbar.style'

export const StyledFooter = styled(StyledNavbarDesktop)`
  font-size: 14px;
  border-top: 0.5px solid #dde;
  border-bottom: none;
  @media ${devices.tablet} {
    padding: 15px 40px;
    border-top: 0.5px solid #dde;
    display: block;
  }
`

export const LicenceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  & strong {
    font-weight: 600;
  }
  @media ${devices.tablet} {
    font-size: 14px;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  @media ${devices.tablet} {
    display: none;
  }
`

export const SocialItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 35px;

  & p {
    margin-bottom: 5px;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100px;
`
