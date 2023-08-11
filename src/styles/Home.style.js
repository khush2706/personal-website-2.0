import styled from 'styled-components'
import { Role } from './Navbar.style'
import { devices } from '../constants'

export const HomeWrapper = styled.div`
  height: 80vh;
  background: linear-gradient(
    to right,
    rgb(230, 218, 206) 0%,
    rgb(230, 218, 206) 40%,
    #fff 40%,
    #fff 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fade_in 1s;
  @media ${devices.tablet} {
    flex-direction: column;
    background: linear-gradient(
      to bottom,
      #fff 0%,
      #fff 30%,
      rgb(230, 218, 206) 30%,
      rgb(230, 218, 206) 100%
    );
    height: fit-content;
    padding: 11px 10px;
    overflow-x: hidden;
  }
`

export const AboutCardWrapper = styled.div`
  width: 375px;
  height: 525px;
  background-color: rgb(244, 236, 230);
  box-shadow: rgba(138, 131, 124, 0.23) -11.31px 11.31px 17px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  overflow: hidden;
  position: relative;
  @media ${devices.tablet} {
    width: 320px;
    height: 500px;
  }
`

export const Separator = styled.hr`
  background-color: rgb(0, 80, 225);
  width: 70px;
  height: 2.8px;
  margin: 25px 0;
`

export const CardRole = styled(Role)`
  font-weight: 300;
  letter-spacing: 0.25em;
  font-size: 16px;
`

export const AboutCardFooter = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 0;
  padding: 0 70px;
`

export const DescWrapper = styled.div`
  width: 419px;
  height: 525px;
  margin-left: 30px;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    margin-top: 20px;
    margin-left: 0;
    padding-right: 10px;
  }
`

export const Heading = styled.h1`
  font-size: 100px;
  @media ${devices.tablet} {
    font-size: 50px;
  }
`

export const SubHeading = styled.h2`
  font-size: 21px;
  font-weight: 400;
  margin-bottom: 30px;
  letter-spacing: -0.2px;
  @media ${devices.tablet} {
    font-size: 17px;
    margin-top: 10px;
    font-weight: 500;
  }
`

export const BioText = styled.p`
  line-height: 1.5em;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 15px;
  color: #333;
  width: 85%;
  letter-spacing: normal;
  @media ${devices.tablet} {
    font-size: 14px;
    margin-top: 10px;
    width: 90%;
    color: black;
    letter-spacing: 1px;
  }
`
