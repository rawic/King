import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import MainTemplate from 'templates/MainTemplate'
import Sidebar from 'components/organisms/Sidebar/Sidebar'
import SummaryBar from 'components/organisms/SummaryBar/SummaryBar'
import Dashboard from './Dashboard'
import Analytics from './Analytics'
import Transactions from './Transactions'
import Settings from './Settings'

const AppContent = styled.section`
  background-color: white;
  border-top-left-radius: 1.2rem;
  border-bottom-left-radius: 1.2rem;
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
