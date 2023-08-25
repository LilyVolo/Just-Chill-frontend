import React from 'react'
import InfoBlocup from '../components/InfoBlockup'
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
const API_URL = 'http://localhost:5005/api'
import Select from 'react-select';
import SelectorFormPlaces from '../components/SelectorFormPlaces'
import "./CityPage.css"

function CityPlanPage() {
  const {id} = useParams();
  const [city, setCity] = useState(null);
  const [plan, setPlan] = useState(null);
  
    async function fetchTargetCity() {
    try {
      const response = await axios.get(`${API_URL}/cities/${id}`);
      setCity(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    } }

    useEffect(() => {
      fetchTargetCity();
    }, [id]);

    async function handleSubmit (event) {
      event.preventDefault()
      const target = event.target
      const formData = new FormData(target)
      console.log(formData.get('place'))
      const selectedOption = formData.get('place')
      try {
        const response = await axios.get(`${API_URL}/cities/${id}/places?option1=${selectedOption}`);
      setPlan(response.data)  
        console.log(response.data)
    }
    catch (error) {
      console.log(error);
    } 
  }

    
    if (!city) {
      return <div className="Loading"> Loading..</div>;
    }
  return (
  <div>
      
    
		
        <div className="city-up-container" > 
        <div className="city-container-wrapper">

       <div> 
          <img  className="city-first-img" src={'../public/'+city.img2} alt="" />
       </div>

          <div className='text-up-city'> <p>
              {city.text}
               </p>  </div>
         
          </div>   
</div>

<div className='form-container'>

      <form action="" onSubmit={handleSubmit} className='form-wrapper'>
        <SelectorFormPlaces/>
        <button> Submit </button>
      </form>

</div>



    </div>
  )
}

export default CityPlanPage
