import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { theme } from 'theme/mainTheme'
import Logo from 'components/atoms/Logo/Logo'
import NavTitle from 'components/atoms/NavTitle/NavTitle'
import LinkIcon from 'components/atoms/LinkIcon/LinkIcon'
import NavLink from 'components/atoms/NavLink/NavLink'
import Notification from 'components/molecules/Notification/Notification'

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

const options = {
  Income: {
    color: {
      bg: theme.successBg,
      dot: theme.highlight,
      text: theme.success
    },
    created: '23:42',
    message: 'Income added',
    name: 'income',
    price: '45,00'
  },
  Outcome: {
    color: {
      bg: theme.errorBg,
      dot: theme.error,
      text: theme.error
    },
    created: '15:32',
    message: 'Outcome added',
    name: 'outcome',
    price: '14,49'
  }
}

const Sidebar = () => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <StyledLogo />
      <NavTitle>Navigation</NavTitle>
    </StyledInnerWrapper>

    <StyledNav>
      <ul>
        <li>
          <StyledNavLink to="/" as={RouterNavLink}>
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

    <Notification type={options.Income}>{options.Income.message}</Notification>

    <Notification type={options.Income}>{options.Income.message}</Notification>

    <Notification type={options.Outcome}>{options.Outcome.message}</Notification>
    <StyledNavLink></StyledNavLink>
  </StyledWrapper>
)

export default Sidebar
