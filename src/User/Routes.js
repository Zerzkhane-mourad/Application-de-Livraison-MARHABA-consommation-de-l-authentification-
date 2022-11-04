import React from 'react'
import Navbar from '../core/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../core/Home';
import Signin from './Signin';
import Signup from './Signup';
import NotFound from './NotFound';;

const Routes = ()=> {
  return (

    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path='/signin' exact component={Signin}/>
            <Route path='/signup' exact component={Signup}/>
            <Route path='/' exact component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
  )
}

export default Routes