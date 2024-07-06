import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Test() {
    const [Name, setName] = useState('');
    const [Contact, setContact] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [CPassword, setCPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const mobilePattern = /^[0-9]{10}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        try {
            if (!Name || !Contact || !Email || !Password || !CPassword) {
                alert("Kindly Fill all the fields");
            } else if (!mobilePattern.test(Contact)) {
                alert('Enter Valid Mobile No.');
            } else if (!emailPattern.test(Email)) {
                alert("Enter Valid email");
            } else {
                const data = await axios.get("http://127.0.0.1:8000/customers/");
                const userdata = data.data.find(e => e.Email === Email);
                if (userdata) {
                    alert("Email Already Exists");
                } else if (Password.length < 8) {
                    alert("Password must be at least 8 characters long");
                } else if (Password !== CPassword) {
                    alert("Password and Confirm Password don't match");
                } else {
                    const signupData = { Name, Contact, Email, Password };
                    await axios.post("http://127.0.0.1:8000/customers/", signupData, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    alert("Registered Successfully");
                    navigate('/');
                }
            }
        } catch (error) {
            alert("Something went wrong");
        }
    };

    return (
        <>
            <div className="signup">
                <form onSubmit={handleSubmit}>
                    <h1>Signup Here</h1>
                    <input type="text" name='name' placeholder='Enter Name' value={Name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="contact" id="contact" placeholder='Enter Mobile No.' value={Contact} onChange={(e) => setContact(e.target.value)} />
                    <input type="text" name="email" id="email" placeholder='Enter Email' value={Email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="password" id="password" placeholder='Enter Password' value={Password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" name="cPassword" id="cPassword" placeholder='Confirm Password' value={CPassword} onChange={(e) => setCPassword(e.target.value)} />
                    <input type="submit" /><br />
                    <p className='Sign'>Already have an account?<Link className='AC' to='/Login'>Login</Link></p>
                </form>
            </div>
        </>
    );
}

export default Test;
