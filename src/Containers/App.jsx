import React, {useState,useEffect } from 'react';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import Scroll from '../Components/scroll';
import './App.css';

function App ()  {
 
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')

      .then(response => response.json())
      .then(users => {setRobots( users )})
  }, [] )
 
  
  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }
  
    
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
          <SearchBox searchChange={onSearchChange} />
        </div>
        <Scroll >
          <CardList robots={filteredRobots} />
        </Scroll>
        
        </div>
    )
      
  }
  
}

export default App
