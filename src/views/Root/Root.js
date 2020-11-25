import Sidebar from 'components/organisms/Sidebar/Sidebar'
import SummaryBar from 'components/organisms/SummaryBar/SummaryBar'
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import MainTemplate from 'templates/MainTemplate'

import Analytics from '../Analytics/Analytics'
import Dashboard from '../Dashboard/Dashboard'
import Settings from '../Settings/Settings'
import Transactions from '../Transactions/Transactions'
import { StyledAppContent } from './Root.styles'

const Root = () => (
  <HashRouter basename="/">
    <MainTemplate>
      <Sidebar />
      <StyledAppContent layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </StyledAppContent>
      <SummaryBar />
    </MainTemplate>
  </HashRouter>
)

export default Root
