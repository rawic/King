import LinkIcon from 'components/atoms/LinkIcon/LinkIcon'
import Logo from 'components/atoms/Logo/Logo'
import NavLink from 'components/atoms/NavLink/NavLink'
import NavTitle from 'components/atoms/NavTitle/NavTitle'
import Notifications from 'components/molecules/NotificationsList/NotificationsList'
import React from 'react'
import { Link, NavLink as RouterNavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const StyledWrapper = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-bottom-left-radius: 1.2rem;
  border-top-left-radius: 1.2rem;
  max-width: 250px;
  padding-bottom: 2.5rem;
  padding-top: 2.5rem;
  width: 100%;
`

const StyledInnerWrapper = styled.div`
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  ${({ bottom }) =>
    bottom &&
    css`
      margin-bottom: ${({ bottom }) => `${bottom}rem`};
    `}
`

const StyledLogo = styled(Logo)`
  margin-bottom: 6.3rem;
`

const StyledNav = styled.nav`
  margin-bottom: 3.4rem;
`

const StyledNavLink = styled(NavLink)`
  margin-top: 2rem;
  padding: 0.5rem 3.5rem;
  width: 100%;
`

const Sidebar = () => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <Link to="/">
        <StyledLogo />
      </Link>
      <NavTitle>Navigation</NavTitle>
    </StyledInnerWrapper>

    <StyledNav>
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

    <StyledInnerWrapper bottom="2.5">
      <NavTitle>Notifications</NavTitle>
    </StyledInnerWrapper>

    <Notifications />
  </StyledWrapper>
)

export default Sidebar
