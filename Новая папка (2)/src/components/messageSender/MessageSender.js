import React, { useState } from 'react';
import './MessageSender.css';
import { FiMoreVertical, FiPaperclip, FiSmile, FiSend, FiMic } from 'react-icons/fi';
import Chat from '../chat/Chat';

export default function MessageSender() {
    const [message, setMessage] = useState("");
    return (
        <div className='messageSender'>
            <div className="messageHeader">
                <div className="messageHeaderAvatar">

                </div>
                <div className="messageHeaderInfo">
                    <p className="chatNameInfo">Dev Squad</p>
                    <p className="chatMemberInfo">140 members</p>
                </div>
                <div className="messageHeaderMore">
                    <FiMoreVertical/>
                </div>
            </div>
            <Chat/>
            <div className="messageTyper">
                <FiPaperclip/>
                <div className="messageTyperContainer">
                     <input autoFocus type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                     <FiSmile/>
                </div>
               {message ? <FiSend className="messageTyperSend"/> : <FiMic className="messageTyperMic"/>}
            </div>
        </div>
    )
}
