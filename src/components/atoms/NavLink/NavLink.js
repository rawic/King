import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledNavLink = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: ${({ active, theme }) => (active ? theme.highlight : theme.secondary)};
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: initial;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  &.active,
  &:hover {
    color: ${({ theme }) => theme.highlight};
  }
  &:focus {
    outline: none;
  }
`

export default StyledNavLink

StyledNavLink.propTypes = {
  active: PropTypes.bool
}
