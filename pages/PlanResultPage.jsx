import React from 'react'
import { useLocation } from 'react-router-dom';
import './PlanResultPage.css'


function PlanResultPage() {
    const location = useLocation();
const data = location.state;
console.log(data, 'new page')
console.log(data[2][0], 'kakaka')
  return (
    <div>
  <div>
    <p>This is plan of your relaxing day:</p>
  </div>
  <div className='block-plan'>
    <p>We propose you to visit {data[0][0].name} to make yor body relaxed:</p>
    <img className='img' src="../public/place.jpg" alt="" />
    <p> rating of the place: {data[0][0].rating} </p>
    <p>adress: {data[0][0].formatted_address}</p>
    <p>We will book it for you, and propose extra options</p>
  </div>
  <div  className='block-plan'>
    <p>According to your choise we recomende you {data[1][0].name}</p>
    <img src={`../public/${data[1][0].img}`} alt="" />
    <p> rating of the place: {data[1][0].rating} </p>
    <p>adress: {data[1][0].formatted_address}</p>
    <p>We will organise transfer, and degustation will be prepeared acoording to our planing</p>
  </div>
  <div  className='block-plan'>
    <p>We propose you this 2 placese on your choise</p>
    <p>{data[2][0].name}</p>
    <img src={`../public/${data[2].img}`} alt="" />
    <p> rating of the place: {data[2][0].rating} </p>
    <p>adress: {data[2][0].formatted_address}</p>
    <div> {data[2][0].icon} </div>
    <p>We will organise transfer, and degustation will be prepeared acoording to our planing</p>
  </div>
    </div>
  )
}

export default PlanResultPage
