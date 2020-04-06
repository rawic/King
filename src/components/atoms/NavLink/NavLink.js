import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavLinkWrapper = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: ${({ active, theme }) => (active ? theme.highlight : theme.secondary)};
  display: flex;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: initial;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
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

const NavLink = ({ className, active, children, icon }) => (
  <NavLinkWrapper className={className} active={active}>
    {icon ? <StyledFontAwesomeIcon icon={icon} /> : null} {children}
  </NavLinkWrapper>
)

export default NavLink

NavLink.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string
}
