import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from '@/presentation/pages'

const Router: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
  )
}

export default Router
