import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { FaUserAlt, FaLock, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import "./Sign.css";
import {toast} from 'react-toastify'
import axios from 'axios';

const Signup = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Contact, setContact] = useState("")
    const [Password, setPassword] = useState("");
    const navigate=useNavigate();

    const handleSubmit =async(e)=>{
        e.preventDefault();

        const mobilePattern = /^[0-9]{10}$/;

        try{
            if(!Name || !Email || !Contact || !Password)
            {
                toast.error("All Fields are Required");
            }
            else if(!mobilePattern.test(Contact)){
                toast.error("Enter Valid Contact No.");
            }
            else if(Password.length<8){
                toast.error("Password should be 8 digit long");
            }
            else{
                const data = await axios.get("http://127.0.0.1:8000/customers/");
                const userdata = data.data.find(e => e.Email === Email);
                if(userdata){
                    toast.error("Email already Exist");
                }
                else{
                    const datapost={Name, Email, Contact, Password}
                    await axios.post("http://127.0.0.1:8000/customers/",datapost,)
                    toast.success("Successfully Registered")
                    navigate('/')
                }  
            }
        }
        catch(error){
            console.log(error)
            toast.error('Something Went Wrong Please try after some time')
        }
    }


    return (
        <div className="wrapper-login">
            <div className="outer-form-container">
                <div className="login-box">
                    <h2>Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input
                                type="text"
                                className="form-control"
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
                        <div className='login-with'>
                            <p>Or Sign with</p>
                            <div className='social-icons'>
                                <a href=""><FcGoogle className='social-icon' /></a>
                                <a href=""><FaFacebook className='social-icon' /></a>
                                <a href=""><FaSquareXTwitter className='social-icon' /></a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="right-form-container">
                    <div className="right-form-container-inner">
                        <h2>welcome</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup
