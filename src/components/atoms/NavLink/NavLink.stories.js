import React from 'react'
import NavLink from './NavLink'

export default {
  title: 'Navigation/Links',
  component: 'NavLink'
}

export const Active = () => <NavLink active icon="grip-horizontal">Dashboard</NavLink>
export const Dashboard = () => <NavLink icon="grip-horizontal">Dashboard</NavLink>
export const Analytics = () => <NavLink icon="chart-bar">Analytics</NavLink>
export const Transactions = () => <NavLink icon="exchange-alt">Transactions</NavLink>
export const Settings = () => <NavLink icon="cog">Settings</NavLink>
