import React, { Component } from 'react';
import SearchBox from './SearchBox';
import { robots } from './robots';
import CardList from './CardList';
import './App.css';

class App extends Component  {
  
  render() {


    return (
      <div className="App">
        <h1> Ultimate RobotFriends</h1>
        <SearchBox/>
        <CardList robots={robots} />
      </div>
    )
  }
}

export default App
