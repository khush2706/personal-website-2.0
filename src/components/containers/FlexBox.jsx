import { StyledFlexBox } from '../../styles/Containers.style'

const FlexBox = ({ direction = null, justify = null, align = null, style = {}, children }) => {
  return (
    <>
      <StyledFlexBox direction={direction} justify={justify} align={align} style={style}>
        {children}
      </StyledFlexBox>
    </>
  )
}

export default FlexBox
