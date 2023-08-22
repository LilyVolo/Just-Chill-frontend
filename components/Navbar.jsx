import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {GiClover, GiHamburgerMenu} from "react-icons/gi"
import  {ImCross} from "react-icons/im"
import './Navbar.css'
import { Button} from "./Button.jsx"


function Navbar() {
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
            TRVL <GiClover/>
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
    <Link to='/services'  className="nav-links" onClick={closeMobileMenu}> 
    Services </Link>
  </li>
  <li className="nav-item">
    <Link to='/aboutus'  className="nav-links" onClick={closeMobileMenu}> 
    About Us </Link>
  </li>
  <li>
    <Link
      to='/sign-up'
      className='nav-links-mobile'
      onClick={closeMobileMenu}>
                Sign Up
     </Link>
            </li>
 </ul>
 {button && <Button buttonStyle='btn--outline'>Sign up</Button>}
      </nav>
      </>
  )
}

export default Navbar