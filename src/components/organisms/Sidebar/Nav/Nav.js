import LinkIcon from 'components/atoms/LinkIcon/LinkIcon'
import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'

import { StyledNav, StyledNavLink } from './Nav.styles'

const Nav = () => (
  <StyledNav layout>
    <ul>
      <li>
        <StyledNavLink to="/" as={RouterNavLink} exact>
          <LinkIcon icon="grip-horizontal" text="Dashboard" />
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="/analytics" as={RouterNavLink}>
          <LinkIcon icon="chart-bar" text="Analytics" />
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="/transactions" as={RouterNavLink}>
          <LinkIcon icon="exchange-alt" text="Transactions" />
        </StyledNavLink>
      </li>

      <li>
        <StyledNavLink to="/settings" as={RouterNavLink}>
          <LinkIcon icon="cog" text="Settings" />
        </StyledNavLink>
      </li>
    </ul>
  </StyledNav>
)

export default Nav
