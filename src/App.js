import React, { Component } from 'react';
import Routes from './components/routes/routes';
import UserStore from './components/store/userStore';

class App extends Component {
  render() {
    return (
      <UserStore.Container>
        <Routes />
      </UserStore.Container>
    );
  }
}

export default App;
