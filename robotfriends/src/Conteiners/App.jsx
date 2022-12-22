import React, { Component } from 'react';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import Scroll from '../Components/scroll';
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

    const { searchfield, robots } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    if (robots.length === 0) {
      return <h1 className='loadingH1'>Loading...</h1>
    } else {
      
      return (
        <div className="App">
          <div className='app-top'>
            <h1> Ultimate RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <Scroll >
            <CardList robots={filteredRobots} />
          </Scroll>
          
         </div>
      )
      
    }
  }
}

export default App
