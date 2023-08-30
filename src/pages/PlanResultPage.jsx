import React from 'react'
import { useLocation } from 'react-router-dom';
import './PlanResultPage.css'
import service from '../service/service';


function PlanResultPage() {
    const location = useLocation();
    const data = location.state;
    console.log (data, 'new page')

 

   function handleClick () {
    service.post(`plans/savedplans`, {city: data.city, restaurants: data.restaurants,
      places: [data.infos[0][0], data.infos[1][0]], 
    }).then(() => {
      
     })
    
   }


  return (
    <div className='container-container-plan-page' >
   <div>
    <p>This is plan of your relaxing day:</p>
  </div>

  <div  className='wrapper-container-plan-page'>

  <div className='plan-block'>
    <p>We propose you to visit {data.infos[0][0].name} to make yor body relaxed:</p>
    <img className='img' src="/place.jpg" alt="" />
    <p> rating of the place: {data.infos[0][0].rating} </p>
    <p>adress: {data.infos[0][0].formatted_address}</p>
    <p>We will book it for you, and propose extra options</p>
  </div>
 <div  className='plan-block'>
    <p>According to your choise we recomende you {data.infos[1][0].name}</p>
    <img src={`../public/${data.infos[1][0].img}`} alt="" />
    <p> rating of the place: {data.infos[1][0].rating} </p>
    <p>adress: {data.infos[1][0].formatted_address}</p>
    <p>We will organise transfer, and degustation will be prepeared acoording to our planing</p>
  </div>
  <div  className='plan-block'>
    <p>We propose you this 2 placese on your choise</p>
    <p>{data.restaurants[0].name}</p>
    <img src='../public/fork.jpg' alt="" />
    <p> rating of the place: {data.restaurants[0].rating} </p>
    <p>adress: {data.restaurants[0].formatted_address}</p>
   
    <p>We will organise transfer, and degustation will be prepeared acoording to our planing</p>
  </div>
  </div>
  <button onClick={handleClick}> 
    save your plan
  </button> 
  
  <>
  
  </>
    </div>
    
  )
}

export default PlanResultPage
