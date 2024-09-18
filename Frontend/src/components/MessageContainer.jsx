import React, { useEffect } from 'react'
import ToMessage from './ToMessage'
import SendMessage from './SendMessage'
import Message from './Message'
import Welcome from './Welcome';
import useConversation from '../zustand/useConversation';
import '../App.css'

function MessageContainer() {
    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(() => {
        return () => setSelectedConversation(null);
    },[setSelectedConversation])
  
    return (
        <div className="flex flex-col h-screen">
            {!selectedConversation ? (
                <Welcome/>
            ) : (
                <>
                    <ToMessage/>
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        <Message/>
                    </div>
                    <SendMessage/>
                </>
            )}
        </div>
    )
}

export default MessageContainer;
