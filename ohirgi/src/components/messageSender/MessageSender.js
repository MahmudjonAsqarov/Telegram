import React, { useState } from 'react'
import '../messageSender/MessageSender.css';
import { FiMoreVertical, FiPaperclip, FiSmile, FiSend, FiMic } from 'react-icons/fi';
import { BiVolumeMute } from 'react-icons/bi';
import { GrCheckboxSelected } from 'react-icons/gr';
import { BsTrash } from 'react-icons/bs';
import { GoUnmute } from 'react-icons/go';
import Chat from '../chat/Chat';
import PrifeSidebar from '../profileSidebar/ProfileSidebar';
import sidebarData from '../../SEARCH_RESULTS.json'

const MessageSender = ({ match }) => {
    // console.log(sidebarData[Math.floor(match.params.userId)]);
    // console.log(match);
    const [message, setMessage] = useState('');
    const [vertMore, setVertMore] = useState(false);
    const [moreMute, setMoreMute] = useState(false);
    const [sideberProfile, setSideberProfile] = useState(false);
    const [chatMessage, setChatMessage] = useState(" ");

    const moreVert = (e) => {
        const moreVertical = document.querySelector('.moreVertical');

        if (!vertMore) {
            moreVertical.classList.add('activeMoreVertical');
            setVertMore(true);
        } else {
            moreVertical.classList.remove('activeMoreVertical');
            setVertMore(false);
        }
    }

    const mute = (e) => {
        setMoreMute(!moreMute);
    }

    const profileSenderHand = (e) => {
        const profileSidebar = document.querySelector('.profileSidebar');
        if (!sideberProfile) {
            profileSidebar.classList.add('activeProfileSidebar');
            setSideberProfile(true);
        };
    }
    const profileSenderHide = (e) => {
        const profileSidebar = document.querySelector('.profileSidebar');
        if (sideberProfile) {
            profileSidebar.classList.remove('activeProfileSidebar');
            setSideberProfile(false);
        };
    }

    const sendMessage = (e) => {
        const messageInput = document.querySelector('.messageInput');
        setChatMessage(message);
        messageInput.value = "";
        e.preventDefault();
    }


    return (
        <div className="Sender">
            <div className="messageSender">
                <div className="messageHeader" onClick={profileSenderHand}>
                    <div className="messageHeaderAvatar" style={{ backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_G9U9095poYEIvtg8fnA2Ef3dcjLEebptQ&usqp=CAU"})` }}>

                    </div>
                    <div className="messageHeaderInfo">
                        <p className="chatNameInfo">Dev Squad</p>
                        <p className="chatMemberInfo">140 members</p>
                    </div>
                    <div className="messageHeaderMore">
                        <FiMoreVertical onClick={moreVert} />
                        <div className="moreVertical">
                            <ul>
                                {!moreMute ?
                                    <li onClick={mute}>
                                        <BiVolumeMute className="morIcons" style={{ fontSize: "25px" }} />
                                        <p>Mute</p>
                                    </li>
                                    :
                                    <li onClick={mute}>
                                        <GoUnmute className="morIcons" style={{ fontSize: "25px" }} />
                                        <p>Unmute</p>
                                    </li>
                                }
                                <li>
                                    <GrCheckboxSelected className="morIcons" style={{ fontSize: "25px" }} />
                                    <p>Select Meesages</p>
                                </li>
                                <li>
                                    <BsTrash className="morIcons" style={{ fontSize: "25px" }} />
                                    <p>Delete Chat</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Chat sendMessage={chatMessage} />
                <div className="messageTyper">
                    <FiPaperclip style={{ fontSize: "25px" }} />
                    <input type="file" className="fileInput" />
                    <form className="messageTyperContainer" onSubmit={sendMessage}>
                        <input autoFocus type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="messageInput" />
                        <FiSmile style={{ fontSize: "25px" }} className="icons" />
                        <button type="submit" className="messageSenderBtn"></button>
                    </form>
                    {!message ? <FiMic style={{ fontSize: "25px" }} className="icons" /> : <FiSend style={{ fontSize: "25px" }} className="icons" />}
                </div>
            </div>
            <div className="profileSidebar">
                <PrifeSidebar />
                <p onClick={profileSenderHide}>X</p>
            </div>
        </div>
    )
}

export default MessageSender;