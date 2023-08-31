import { useLocation, useNavigate } from 'react-router-dom';
import './PlanResultPage.css'
import service from '../service/service';


function PlanResultPage() {
    const location = useLocation();
    const data = location.state;
    console.log (data, 'new page')
    const navigate =  useNavigate()
 

   function handleClick () {
    service.post(`plans/savedplans`, {city: data.city, restaurants: data.restaurants,
      places: [data.infos[0][0], data.infos[1][0]], 
    }).then(() => {
      navigate('/saved')
     })
    
   }


  return (
    <div className='container-container-plan-page' >
   <div className='result-text'>
    <p>This is plan of your relaxing day:</p>
  </div>

  <div  className='wrapper-container-plan-page'>

  <div className='plan-block'>
  <img className='img' src="/place.jpg" alt="" />

    <p>We propose you to visit {data.infos[0][0].name} to make yor body relaxed:</p>
    <p> rating of the place: {data.infos[0][0].rating} </p>
    <p>adress: {data.infos[0][0].formatted_address}</p>
    <p>We will book it for you, and propose extra options</p>
  </div>
 <div  className='plan-block'>
  <img src={`../public/${data.infos[1][0].img}`} alt="" />
    <p>According to your choise we recomende you {data.infos[1][0].name}</p>
    <p> rating of the place: {data.infos[1][0].rating} </p>
    <p>adress: {data.infos[1][0].formatted_address}</p>
    <p>We will organise transfer, and degustation will be prepeared acoording to our planing</p>
  </div>
  <div  className='plan-block'>
  <img src='../public/restaurant.jpg' alt="" />
    <p>We propose you this restaurant for a perfect dinner</p>
    <p>{data.restaurants[0].name}</p>
    <p> rating of the place: {data.restaurants[0].rating} </p>
    <p>adress: {data.restaurants[0].formatted_address}</p>
   
    <p>Dinner will be served immediately after your arrival</p>
  </div>
  </div>

  
  <button className='button' onClick={handleClick}> 
    save your plan
  </button> 

  
  <>
  
  </>
    </div>
    
  )
}

export default PlanResultPage
