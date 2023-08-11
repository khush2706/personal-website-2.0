import styled from 'styled-components'
import { devices } from '../constants'

export const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
  align-items: ${(props) => (props.align ? props.align : 'stretch')};
`
export const GeometricShape = styled.div`
  width: 1em;
  height: 1.1em;
  background-color: rgb(0, 80, 225);
  margin-right: 8px;
  @media ${devices.laptop} {
    width: 1em;
    height: 1em;
    margin-right: 15px;
  }
`
