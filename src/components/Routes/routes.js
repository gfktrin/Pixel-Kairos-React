import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from '../../screens/homeScreen/homeScreen';
import ContactScreen from '../../screens/contactScreen/contactScreen';
import AboutScreen from '../../screens/aboutScreen/aboutScreen';
import ShopScreen from '../../screens/shopScreen/shopScreen';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeScreen}/>
    <Route path='/empresa' component={AboutScreen}/>
    <Route path='/loja' component={ShopScreen}/>
    <Route path='/contato' component={ContactScreen}/>
    <Route path='/login' render={() => <h1>Login</h1>}/>
  </Switch>
);

export default Routes;
