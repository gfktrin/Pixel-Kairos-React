import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from '../../screens/homeScreen/homeScreen';
import AboutScreen from '../../screens/aboutScreen/aboutScreen';
import ShopScreen from '../../screens/shopScreen/shopScreen';
import LoginScreen from '../../screens/loginScreen/loginScreen';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeScreen}/>
    <Route path='/empresa' component={AboutScreen}/>
    <Route path='/loja' component={ShopScreen}/>
    <Route path='/login' render={LoginScreen}/>
  </Switch>
);

export default Routes;
