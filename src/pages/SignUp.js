import React, { useState } from 'react';
import './Login.css';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitUser = (e) => {
        const errorAlert = document.querySelector('.user_alreadyInuse');
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => console.log(user))
            .catch((err) => {
                errorAlert.innerHTML = err.message;
                errorAlert.classList.add('showAlert');
                setTimeout(() => {
                    errorAlert.classList.remove('showAlert');
                }, 3000)
            })
    }

    return (
        <div className="login">
            
            <div className="user_alreadyInuse">

            </div>

            <div className="login_container">
                <Link to="/">
                    <img className="login_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzAJMpp9eGTttt7oEoMJwbcrXzliO60FbpA&usqp=CAU" alt="telegram logo" />
                </Link>
                <Link to="/">
                    <h2>Telegram messenger</h2>
                </Link>

                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem, <span><Link to="/login">Sign In</Link></span></p>
                <input type="email" placeholder="Email" id="login_email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder="Password" id="login_password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type="button" id="login_submit" onClick={submitUser}>Get started</button>

            </div>

        </div>
    )
}

export default SignUp;
