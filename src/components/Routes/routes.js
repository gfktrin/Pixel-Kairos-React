import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from '../../screens/homeScreen/homeScreen';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeScreen}/>
    <Route path='/empresa' render={() => <h1>A empresa</h1>}/>
    <Route path='/loja' render={() => <h1>Loja</h1>}/>
    <Route path='/contato' render={() => <h1>Contato</h1>}/>
    <Route path='/login' render={() => <h1>Login</h1>}/>
  </Switch>
);

export default Routes;
