import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Hero from './Hero'
import HeroDetail from './HeroDetail'
import Home from './Home'
import Otro1 from './Otro1'
import Otro2 from './Otro2'

import View from '../layout/View'

const RouterApp = () => {
  return (
    <View>
      <BrowserRouter>
        <Switch>
          <Route path="/otro1">
            <Otro1/>
          </Route>
          <Route path="/otro2">
            <Otro2/>
          </Route>
          <Route path="/hero">
            <Hero />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </View>
  )
}

export default RouterApp
