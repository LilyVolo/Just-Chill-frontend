import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import "./SignupPage.css"




function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
   
    const navigate = useNavigate();
    
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
   
    
    const handleSignupSubmit = (e) =>  {
        e.preventDefault();
        // Create an object representing the request body
        const requestBody = { email, password, name };

    axios.post(`${API_URL}auth/signup`, requestBody)
      .then((response) => {
        navigate('/login');
        console.log(response)
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
    }

    return (
      <div className="signupPage">
        <div className='containerSignup'>


      
        <h1>Sign Up</h1>
   
        <form className='subscrForm' onSubmit={handleSignupSubmit}>
          <label>Email:</label>
          <input 
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
   
          <label>Password:</label>
          <input 
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
   
          <label>Name:</label>
          <input 
            type="text"
            name="name"
            value={name}
            onChange={handleName}
          />
   
          <button type="submit">Sign Up</button>
        </form>
   
        { errorMessage && <p className="error-message">{errorMessage}</p> }
   
        <div>
        <p className='textLogin'>Already have account?</p>
        <Link to={"/login"}> Login</Link>
        </div>
        {/* <img className='backgraoundSignUp' src="../public/signup.jpg" alt="" /> */}
        </div>
      </div>

    )
}

export default SignupPage
