import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {GiClover, GiHamburgerMenu} from "react-icons/gi"
import  {ImCross} from "react-icons/im"
import './Navbar.css'
import { Button} from "./Button.jsx"
import { useContext } from "react";                  
import { AuthContext } from "../context/auth.context"; 
 

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
           Just chill <GiClover className='logo-svg'/>
</Link>

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

 
        </>
      )}

{!isLoggedIn && (
        <li className="nav-item">
        <Link to='/login'  className="nav-links" onClick={closeMobileMenu}> 
       Login </Link>
      </li>
      )}



  
 </ul>
 </div>
 { !isLoggedIn && button && <Button way={'/signup'}  buttonStyle='btn--outline'>Sign up</Button>}
 
 {isLoggedIn && (
    <>

  <div className='btn-contn'>
 { button &&<Button onClick={logOutUser} buttonStyle='btn--outline'>Logout</Button>}
  </div>
          {/* <span>{user && user.name}</span> */}
        </>
      )}

      </nav>
      </>
  )
}

export default Navbar