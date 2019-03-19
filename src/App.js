import React, { Component } from 'react';

import Header from './components/header/header';
import HomeScreen from './screens/homeScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomeScreen />
      </div>
    );
  }
}

export default App;
