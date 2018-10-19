import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'
import NewMessage from './components/NewMessage'

class App extends Component {
  componentDidMount () {
    fetch('http://localhost:8082/api/messages')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <NewMessage />
        <MessageList />
      </div>
    )
  }
}

export default App;
