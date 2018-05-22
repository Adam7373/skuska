import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Doplnky from './Doplnky'
import Recenzie from './Recenzie'
import Kontakt from './Kontakt'

const Main = _ => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/doplnky' component={Doplnky}/>
      <Route path='/recenzie' component={Recenzie}/>
      <Route path='/kontakt' component={Kontakt}/>
    </Switch>
  </main>
)

export default Main;
