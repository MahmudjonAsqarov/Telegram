import React from 'react';
import '../chat/Chat.css';

const Chat = ({sendMessage}) => {
    return (
        <div className="chat">
            <div className="chat_container">
                <div className="message">
                    <p>{sendMessage}</p>
                </div>
            </div>
        </div>
    )
}

export default Chat
