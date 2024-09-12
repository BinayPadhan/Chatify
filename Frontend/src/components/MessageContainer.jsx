import React from 'react'
import ToMessage from './ToMessage'
import SendMessage from './SendMessage'
import Message from './Message'
import Welcome from './Welcome';

function MessageContainer() {
    const welcome = false;
  
    return (
        <div className="flex flex-col h-screen">
            {welcome ? (
                <Welcome/>
            ) : (
                <>
                    <ToMessage/>
                    <div className="flex-1 overflow-y-auto">
                        <Message/>
                    </div>
                    <SendMessage/>
                </>
            )}
        </div>
    )
}

export default MessageContainer;
