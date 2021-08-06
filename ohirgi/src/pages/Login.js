import React, { useState  } from 'react';
import './Login.css';
import { auth } from '../firebase'
import { Offline, Online } from 'react-detect-offline'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log('email,password');
    const submitUser = (e) => {
        const errorAlert = document.querySelector('.user_alreadyInuse')
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => console.log(user))
            .catch((err) => {
                errorAlert.innerHTML = err.message;
                errorAlert.classList.add('showAlert');
                setTimeout(() => {
                    errorAlert.classList.remove('showAlert');
                },
                    3000)
            })
    }
    return (
        <div className="login">
            <Online>Only shown when you're online</Online>
            <Offline>Only shown offline (surprise!)</Offline>
            <div className="user_alreadyInuse">

            </div>
            <div className="login_container">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/768px-Telegram_Messenger.png" alt="" />
                <h2>Telegram Messenger</h2>
                <p>World's fastest telegram messenger ever. Secure and Private Leading...</p>
                <p>Try Telegram Now...</p>
                <input autoComplete="none" type="email" id="login_email" placeholder="Your Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" id="login_password" placeholder="Your password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button onClick={submitUser} id="login_submit">Get Started</button>
            </div>
        </div>
    )
}

export default Login
