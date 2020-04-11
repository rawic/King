import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import MainTemplate from 'templates/MainTemplate'
import Sidebar from 'components/organisms/Sidebar/Sidebar'
import Dashboard from './Dashboard'
import Analytics from './Analytics'
import Transactions from './Transactions'
import Settings from './Settings'

const AppContent = styled.section`
  background-color: white;
  border-radius: 12px;
  margin: 30px;
  padding: 30px;
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
    </MainTemplate>
  </Router>
)

export default Root
