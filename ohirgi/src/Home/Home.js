import React from 'react'
import './Home.css'
import Sidebar from '../sidebar/Sidebar'
import MessageSender from '../components/messageSender/MessageSender'

export default function Home({match}) {
    // console.log(match );
    return (
        <div className="home">
            <Sidebar/>
            <MessageSender match={match}/>
        </div>
    )
}
