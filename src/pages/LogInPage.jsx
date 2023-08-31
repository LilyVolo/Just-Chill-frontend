import React from 'react'
import { useState, useContext} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
import { AuthContext } from "../context/auth.context"
import './LoginPage.css'
import { Button} from "../components/Button.jsx"


function LogInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext);   
   
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
   
    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };

        axios.post(`${API_URL}/auth/login`, requestBody)
        .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
          console.log('JWT token', response.data.authToken );
          storeToken(response.data.authToken)
          authenticateUser(); 
          
          navigate('/');                             // <== ADD      
        })
        .catch((error) => {
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        })
    };    
    
    return (
      <div className="loginPage">

        <div className='containerLogin'>
        <h1>Login</h1>
   
   <form className='loginForm' onSubmit={handleLoginSubmit}>
     <label className='formElements'>Email:</label>
     <input 
       type="email"
       name="email"
       value={email}
       onChange={handleEmail}
     />

     <label className='formElements'>Password:</label>
     <input
       type="password"
       name="password"
       value={password}
       onChange={handlePassword}
     />

     <button className='formElements button' type="submit">Login</button>
   </form>
   { errorMessage && <p className="error-message">{errorMessage}</p> }

   <p  className='formElements'>Don't have an account yet?</p>

   <Button
          className='btns formElements'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          way='/signup'
          onClick={console.log('hey')}
        >
         Sign up
        </Button>
        </div>
        
      </div>
    )
}

export default LogInPage

