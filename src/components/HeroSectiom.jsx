import React from "react";
import { Button} from "./Button.jsx"
import "./HeroSection.css"
import "../App.css"

function HeroSection () {
    return (
        <div className="hero-container">
           <img  className="imgHero" src="monah.jpg" alt="" />
            <p>Its time to stop running <br/> and relax</p>
            <div className="hero-btn">
            <Button
            way='/signup'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          know more
        </Button>
            </div>
        </div>
    )
}

export default HeroSection