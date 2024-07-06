import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import "./Sign.css";


const Signup = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Contact, setContact] = useState("")
    const [Password, setPassword] = useState("");
    return (
        <div className="wrapper-login">
            <div className="login-box">
                <h2>Signup</h2>
                <form>
                    <div className="input-box">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                            value={Name}
                        />
                        <label htmlFor="username">Name</label>
                        <FaUserAlt className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={Email}
                        />
                        <label htmlFor="username">Email</label>
                        <FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setContact(e.target.value)}
                            value={Contact}
                        />
                        <label htmlFor="username">Phone</label>
                        <FaPhone className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                            value={Password}
                        />
                        <label htmlFor="password">Password</label>
                        <FaLock className='icon' />
                    </div>
                    <button type='submit' className='login-btn'>Signup</button>
                    <div className='signup-link'>
                        <p>Already have an account? <Link to="/Login">Login</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup
