import React from "react";
import { Button} from "./Button.jsx"
import "./HeroSection.css"
import "../src/App.css"

function HeroSection () {
    return (
        <div className="herp=container">
           <img  className="imgHero" src="monah.jpg" alt="" />
            <p>Its time to stop running and relax</p>
            <div className="hero-btn">
            <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          to know more
        </Button>
            </div>
        </div>
    )
}

export default HeroSection