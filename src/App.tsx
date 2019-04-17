import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RootRouter from './router/rootRouter'

class App extends Component {
  render() {
    return (
      <RootRouter />
    );
  }
}

export default App;
