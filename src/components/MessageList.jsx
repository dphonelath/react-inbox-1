import React from 'react'
import Message from './Message'

const MessageList = ({messageList}) => {
    return (
        <div>
            {messageList.map((messages) => <Message message = {messages} /> )}
            
        </div>
    );
};

export default MessageList; 