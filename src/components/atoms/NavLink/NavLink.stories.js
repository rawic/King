import LinkIcon from 'components/atoms/LinkIcon/LinkIcon'
import React from 'react'

import NavLink from './NavLink'

export default {
  title: 'Navigation/Links',
  component: 'NavLink'
}

export const Active = () => (
  <NavLink active>
    <LinkIcon icon="grip-horizontal" text="Dashboard" />
  </NavLink>
)
export const Dashboard = () => (
  <NavLink>
    <LinkIcon icon="grip-horizontal" text="Dashboard" />
  </NavLink>
)
export const Analytics = () => (
  <NavLink>
    <LinkIcon icon="chart-bar" text="Analytics" />
  </NavLink>
)
export const Transactions = () => (
  <NavLink>
    <LinkIcon icon="exchange-alt" text="Transactions" />
  </NavLink>
)
export const Settings = () => (
  <NavLink>
    <LinkIcon icon="cog" text="Settings" />
  </NavLink>
)
