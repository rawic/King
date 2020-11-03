import styled from 'styled-components/macro'

const Heading = styled.h2`
  font-size: 2.4rem;
  font-weight: ${({ weight, theme }) => theme.fontWeight[weight] || theme.fontWeight.black};
`

export default Heading
