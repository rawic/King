import styled from 'styled-components'

const NavTitle = styled.h3`
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

export default NavTitle
