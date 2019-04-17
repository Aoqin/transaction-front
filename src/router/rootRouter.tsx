import React, { Component } from 'react'
// import { RouteProps } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from '../pages/login'
import HomePage from '../pages/home'
import RegistPage from '../pages/regist'
import NotFoundPage from '../pages/404'

export default class RootRouter extends Component {
  // public routeConfig: Array<RouteProps> = [
  //   {
  //     path: '/login',
  //     component: LoginPage
  //   },
  //   {
  //     path: '/home',
  //     component: HomePage
  //   }
  // ]

  render() {
    return (
      <Router>
        {/* <Route path="/" component={HomePage} /> */}
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/regist" component={RegistPage} />
        <Route path="/404" component={NotFoundPage} />
      </Router>
    )
  }
}
