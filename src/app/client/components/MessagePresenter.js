import React from 'react';

function MessagePresenter ({ messages }) {
  return (
    <ul>
      { messages ? (messages.map(message => 
        (<li key={message.id}>
          
        </li>
        ))) : (<div>Loading...</div>)}  
    </ul>
  )
}

export default MessagePresenter;