import React from 'react'
import Message from './Message'

const MessageList = ({messageList, toggleStarred, toggleChecked}) => {
    const messageComponents = messageList.map(message =>{
        return <Message key={message.id}
                        id={message.id}
                        labels={message.labels}
                        read={message.read}
                        selected={message.selected}
                        starred={message.starred}
                        subject={message.subject}
                        body={message.body} 
                        toggleStarred = {toggleStarred}
                        toggleChecked= {toggleChecked}/>
    })
    return (
        <div>
            {messageComponents} 
        </div>
        )
};

export default MessageList; 