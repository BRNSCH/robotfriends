import React, { Component } from 'react'
import Card from './Card'
import { robots } from './robots'
import './App.css'

class App extends Component  {
  
  render() {

    return (
      <div className="App">
        <h1> teste meu</h1>
        <div className='cards'>
          <Card robotId={robots} />
          <Card robotId={robots} />
          <Card robotId={robots} />
        </div>
      </div>
    )
  }
}

export default App
