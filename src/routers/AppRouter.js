import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import ExpenseDashboardPage from '../components/ExpenseDashboard'
import Header from '../components/Header'
import HelpPage from '../components/Help'
import NotFoundPage from '../components/NotFound'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
        <Route path="/create" component={AddExpensePage}></Route>
        <Route path="/edit/:id" component={EditExpensePage}></Route>
        <Route path="/help" component={HelpPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>  
  </BrowserRouter>
)
export default AppRouter