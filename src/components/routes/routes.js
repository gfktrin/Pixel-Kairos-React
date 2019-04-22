import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomeScreen from '../../screens/homeScreen/homeScreen';
import AboutScreen from '../../screens/aboutScreen/aboutScreen';
import ShopScreen from '../../screens/shopScreen/shopScreen';
import LoginScreen from '../../screens/loginScreen/loginScreen';
import PrivateRoute from './privateRoute';

const Routes = () => (
  <Router>
    <Route exact path='/' component={HomeScreen}/>
    <Route path='/empresa' component={AboutScreen}/>
    <Route path='/loja' component={ShopScreen}/>
    <Route path='/login' component={LoginScreen}/>
    <PrivateRoute path='/configuracoes'component={() => <h1>Logado</h1> } />
  </Router>
);

export default Routes;
