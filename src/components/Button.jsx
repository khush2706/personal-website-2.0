import { StyledButton } from '../styles/Button.style'

const Button = ({
  backgroundcolor = null,
  border = null,
  color = null,
  width = null,
  children
}) => {
  return (
    <>
      <StyledButton backgroundcolor={backgroundcolor} border={border} color={color} width={width}>
        {children}
      </StyledButton>
    </>
  )
}

export default Button
