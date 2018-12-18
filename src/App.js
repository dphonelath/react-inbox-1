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
  }

  toggleStarred = (messageID) => {
    fetch('http://localhost:8082/api/messages', {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        messageIds:[messageID],
        command: "star"
      })
    })
    .then(response => response.json())
    .then(newMessages => {
      this.setState({
        messages: newMessages
      })
    })
      const newMessages = this.state.messageList.map(message =>{
        if(message.id == messageID) {
          message.starred = !message.starred
        }
      })
  }

  toggleChecked = (messageID) => {
    const newMessages = this.state.messageList.map(message =>{
      if(message.id == messageID) {
        message.selected = !message.selected
      }
      return message 
    })
    this.setState({
      messages: newMessages
    })
  }

  addNewMessage = (newMessage) => {
    // POST 
    console.log(newMessage)
    fetch('http://localhost:8082/api/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newMessage)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        messageList: this.state.messageList.concat(data)
      })
    })
  }


  render() {
    return (
      <div className="App">
        <Toolbar />
        <NewMessage addNewMessage= {this.addNewMessage}/>
        <MessageList messageList = {this.state.messageList} 
                    toggleStarred={this.toggleStarred} 
                    toggleChecked={this.toggleChecked}/>
        
      </div>
    )
  }
}

export default App;
