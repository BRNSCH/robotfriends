import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import './App.css';

class App extends Component  {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      
      .then(response => response.json())
      .then(users =>  this.setState({ robots: users }))
    
  }
  onSearchChange=(event)=> {
    this.setState({ searchfield: event.target.value })   
    
  }

  render() {

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    if (this.state.robots.length === 0) {
      return <h1 className='loadingH1'>Loading...</h1>
    } else {
      
      return (
        <div className="App">
          <div className='app-top'>
            <h1> Ultimate RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <scroll className='card-list'>
            <CardList robots={filteredRobots} />
          </scroll>
          
         </div>
      )
      
    }
  }
}

export default App
