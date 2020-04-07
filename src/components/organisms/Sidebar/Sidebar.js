import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink as RouterNavLink, Link } from 'react-router-dom'
import LinkIcon from 'components/atoms/LinkIcon/LinkIcon'
import Logo from 'components/atoms/Logo/Logo'
import NavLink from 'components/atoms/NavLink/NavLink'
import NavTitle from 'components/atoms/NavTitle/NavTitle'
import Notifications from 'components/molecules/NotificationsList/NotificationsList'

const StyledWrapper = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  max-width: 250px;
  padding-bottom: 25px;
  padding-top: 25px;
  width: 100%;
`

const StyledInnerWrapper = styled.div`
  padding-left: 35px;
  padding-right: 35px;
  ${({ bottom }) =>
    bottom &&
    css`
      margin-bottom: ${({ bottom }) => `${bottom}px`};
    `}
`

const StyledLogo = styled(Logo)`
  margin-bottom: 63px;
`

const StyledNav = styled.nav`
  margin-bottom: 34px;
`

const StyledNavLink = styled(NavLink)`
  margin-top: 20px;
  padding: 5px 35px;
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

    <StyledInnerWrapper bottom="25">
      <NavTitle>Notifications</NavTitle>
    </StyledInnerWrapper>

    <Notifications />
  </StyledWrapper>
)

export default Sidebar
