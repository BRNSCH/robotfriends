import React, { Component } from 'react';
import Card from './Card';
import { robots } from './robots';
import './App.css';

class App extends Component  {
  
  render() {

    
    return (
      <div className="App">
        <h1> teste meu</h1>
        <div className='cards'>
          <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
          <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
          <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
        </div>
      </div>
    )
  }
}

export default App
