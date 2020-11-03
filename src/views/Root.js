import Sidebar from 'components/organisms/Sidebar/Sidebar'
import SummaryBar from 'components/organisms/SummaryBar/SummaryBar'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import MainTemplate from 'templates/MainTemplate'

import Analytics from './Analytics'
import Dashboard from './Dashboard'
import Settings from './Settings'
import Transactions from './Transactions'

const AppContent = styled.section`
  background-color: white;
  border-bottom-left-radius: 1.2rem;
  border-top-left-radius: 1.2rem;
  margin-bottom: 3rem;
  margin-left: 3rem;
  margin-top: 3rem;
  padding: 3rem;
  width: 100%;
`

const Root = () => (
  <Router>
    <MainTemplate>
      <Sidebar />
      <AppContent>
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
      </AppContent>
      <SummaryBar />
    </MainTemplate>
  </Router>
)

export default Root
