import React from 'react';
import '../personal/Personal.css';


function Personal({username, lastMessage, image}) {
    return (
        <div className="personal">
            <div style={{backgroundImage: `url(${image})`}} className="profile_image"></div>
            <div className="message__detail">
                <p>{username}</p>
                <p>{lastMessage}</p>
            </div>
        </div>
    )
}

export default Personal
