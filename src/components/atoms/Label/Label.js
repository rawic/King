import styled from 'styled-components'

const Label = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 0.6rem;
`

export default Label
