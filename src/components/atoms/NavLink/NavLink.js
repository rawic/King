import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavLinkWrapper = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.secondary};
  border: 0;
  font-size: initial;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  display: flex;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.highlight};
  }
  &:focus {
    outline: none;
  }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
`

const NavLink = ({ icon, children }) => (
  <NavLinkWrapper>
    {icon ? <StyledFontAwesomeIcon icon={icon} /> : null} {children}
  </NavLinkWrapper>
)

export default NavLink

NavLink.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.element
}
