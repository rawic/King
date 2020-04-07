import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainTemplate from 'templates/MainTemplate'
import Sidebar from 'components/organisms/Sidebar/Sidebar'
import Dashboard from './Dashboard'
import Analytics from './Analytics'
import Transactions from './Transactions'
import Settings from './Settings'

const Root = () => (
  <Router>
    <MainTemplate>
      <Sidebar />
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
    </MainTemplate>
  </Router>
)

export default Root
