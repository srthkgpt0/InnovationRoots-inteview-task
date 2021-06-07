import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../components/login'
import SignUp from '../components/signUp'
import BookEvent from '../container/bookEvent'
import CreateEvent from '../container/createEvent'
import RegisteredUserList from '../container/registeredUserList'
import LoginLayout from '../layouts/login'
import MainLayout from '../layouts/main'
import WithAuth from '../utilities/withAuth'
import RouteWithLayout from './RouteWithLayout'
function Routes() {
  return (
    <Switch>
      <RouteWithLayout
        component={Login}
        exact
        layout={WithAuth(LoginLayout)}
        path='/'
      />
      <RouteWithLayout
        component={CreateEvent}
        exact
        layout={WithAuth(MainLayout)}
        path='/dashboard'
      />
      <RouteWithLayout
        component={BookEvent}
        exact
        layout={WithAuth(MainLayout)}
        path='/book-event'
      />
      <RouteWithLayout
        component={SignUp}
        exact
        layout={WithAuth(LoginLayout)}
        path='/sign-up'
      />
      <RouteWithLayout
        component={RegisteredUserList}
        exact
        layout={WithAuth(MainLayout)}
        path='/registered-users'
      />
    </Switch>
  )
}

export default Routes
