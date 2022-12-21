import React, { Component } from 'react';
import SearchBox from './SearchBox';
import { robots } from './robots';
import CardList from './CardList';
import './App.css';

class App extends Component  {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield:''
    }
  }

  onSearchChange=(event)=> {
    this.setState({ searchfield: event.target.value })   
    
  }

  render() {

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div className="App">
        <div className='app-top'>
          <h1> Ultimate RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <div className='card-list'>
          <CardList robots={filteredRobots} />
        </div>
        
       </div>
    )
  }
}

export default App
