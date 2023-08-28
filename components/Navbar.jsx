import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {GiClover, GiHamburgerMenu} from "react-icons/gi"
import  {ImCross} from "react-icons/im"
import './Navbar.css'
import { Button} from "./Button.jsx"
import { useContext } from "react";                  
import { AuthContext } from "../src/context/auth.context"; 
 

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);




 return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           Just chill <GiClover/>
</Link>
</div>
<div className='menu-icon' onClick={handleClick}>
   {click? <ImCross/> :<GiHamburgerMenu/> }
</div>
 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
  <li className="nav-item">
    <Link to='/'  className="nav-links" onClick={closeMobileMenu}>
       Home </Link>
  </li>

  <li className="nav-item">
    <Link to='/aboutus'  className="nav-links" onClick={closeMobileMenu}> 
    About Us </Link>
  </li>


  {isLoggedIn && (
    <>
  <li className="nav-item">
    <Link to='/saved'  className="nav-links" onClick={closeMobileMenu}> 
   Saved Plans </Link>
  </li>
  <button onClick={logOutUser}>Logout</button>
          {/* <span>{user && user.name}</span> */}
        </>
      )}

{!isLoggedIn && (
        <li className="nav-item">
        <Link to='/login'  className="nav-links" onClick={closeMobileMenu}> 
       Login </Link>
      </li>
      )}





 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}  






  
 </ul>
 {button && <Button buttonStyle='btn--outline'>Sign up</Button>}
      </nav>
      </>
  )
}

export default Navbar