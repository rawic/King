import styled from 'styled-components'

const StyledIconCircle = styled.div`
  align-items: center;
  border-radius: 50%;
  border: 1px solid hsl(0, 0%, 92.2%);
  box-shadow: 0px 0px 16px hsla(0, 0%, 0%, 0.07);
  box-sizing: border-box;
  color: ${({ color }) => color};
  display: flex;
  font-size: 2.4rem;
  height: 4.8rem;
  justify-content: center;
  margin-right: 1.6rem;
  width: 4.8rem;
`

export default StyledIconCircle
