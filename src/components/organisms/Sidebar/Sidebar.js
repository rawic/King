import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from 'theme/mainTheme'
import Logo from 'components/atoms/Logo/Logo'
import NavTitle from 'components/atoms/NavTitle/NavTitle'
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
          <StyledNavLink icon="grip-horizontal">Dashboard</StyledNavLink>
        </li>

        <li>
          <StyledNavLink icon="chart-bar">Analytics</StyledNavLink>
        </li>

        <li>
          <StyledNavLink icon="exchange-alt">Transactions</StyledNavLink>
        </li>

        <li>
          <StyledNavLink icon="cog">Settings</StyledNavLink>
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
