import React, { Component } from 'react';
import { robots } from './robots';
import CardList from './CardList';
import './App.css';

class App extends Component  {
  
  render() {


    return (
      <div className="App">
        <h1> teste meu</h1>
        <CardList robots={robots} />
      </div>
    )
  }
}

export default App
