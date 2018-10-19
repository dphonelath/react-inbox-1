import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'
import NewMessage from './components/NewMessage'

class App extends Component {

  state = {
    messageList:[]
  }

  async componentDidMount () {
    const response =  await fetch ('http://localhost:8082/api/messages')
    const json = await response.json()
    this.setState({messageList: json})
    console.log(json)
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <NewMessage />
        <MessageList messageList = {this.state.messageList} />
      </div>
    )
  }
}

export default App;
