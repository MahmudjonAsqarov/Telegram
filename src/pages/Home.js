import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Home.css'
import MessageSender from '../components/messageSender/MessageSender';

function Home({match}) {
    return (
        <div className="home">
            <Sidebar/>
            <MessageSender match={match}/>
        </div>
    )
}

export default Home
