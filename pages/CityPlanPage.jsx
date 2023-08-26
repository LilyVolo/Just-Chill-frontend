import React from 'react'
import InfoBlocup from '../components/InfoBlockup'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
const API_URL = 'http://localhost:5005/api'
import Select from 'react-select';
import SelectorFormPlaces from '../components/SelectorFormPlaces'
import "./CityPage.css"


function CityPlanPage() {


  const {id} = useParams();
  const [city, setCity] = useState(null);
  const [plan, setPlan] = useState(null);
  const navigate =  useNavigate()



  const options1 = [
    { value: 'solo thai massage', label: 'solo thai massage' },
    { value: 'duo thai massage', label: 'duo thai massage' },
    { value: 'hands massage', label: 'hands massage' },
    { value: 'feet massage', label: 'feet massage' },
    { value: 'anti-stress massage', label: 'anti-stress massage' },
    { value: 'massage for pregnant', label: 'massage for pregnant' },
    { value: 'medical massage', label: 'medical massage' },
    { value: 'tantra exprience', label: 'tantra exprience' },
    { value: 'oil massage', label: ' oil massage' },
    { value: 'massage with plantes', label: 'massage with plantes' },
    { value: ' shamanic sacred rituals', label: 'shamanic sacred rituals' },
   
  ];

  const options3 = [
    { value: 'french', label: 'french' },
    { value: 'italian', label: 'italian' }]

    const options4 = [
      { value: '1', label: '1' },
      { value: '4', label: '4' }]


    async function fetchTargetCity() {
    try {
      const response = await axios.get(`${API_URL}/cities/${id}`);
      setCity(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    } }

    async function fetchRestaurant(selectedOption3, selectedOption4) {
      // Replace 'YOUR_API_KEY' with your actual Google Places API key
      const apiKey = import.meta.env.VITE_GAPI_KEY;
      //const location = { lat: 37.7749, lng: -122.4194 }; // Example location (San Francisco)
      //const radius = 5000; // Radius in meters

      // Perform a nearby search
      //const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=${radius}&key=${apiKey}`;
      const apiUrl2= `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurant%20${selectedOption3}%20%C3%A0%20paris&radius=10000&maxprice=${selectedOption4}&key=`+apiKey;
      const restaurant = await axios.get(apiUrl2, {
            headers: {
              'Access-Control-Allow-Origin': '*', // Allow requests from any origin
            },
          })
      return restaurant.data.results.filter(result => {
        // Filter based on budget and review criteria
        // You'll need to define your own logic here based on available data
        const meetsBudgetCriteria = result.price_level && result.price_level <= 2; // Example: Budget is low to moderate
        const meetsReviewCriteria = result.rating && result.rating >= 4.0; // Example: Minimum review rating

        return meetsBudgetCriteria && meetsReviewCriteria;
      })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
    }

    useEffect(() => {
      fetchTargetCity();
      //console.log()
    }, [id]);

    async function handleSubmit (event) {
      event.preventDefault()
      const target = event.target
      const formData = new FormData(target)
      console.log(formData.get('massage'))
      const selectedOption = formData.get('massage')
      const selectedOption2= formData.get('degustation')
      const selectedOption3 = formData.get('cuisine')
      const selectedOption4 = formData.get('budget')
      
    
      try {
      const response = await axios.get(`${API_URL}/cities/${id}/places?option1=${selectedOption}&option2=${selectedOption2}`);
      setPlan(response.data)  
      const restaurant = fetchRestaurant(selectedOption3, selectedOption4)
      let kaka = [...response, restaurant]
      console.log(response.data)
      navigate('plan', {state: kaka})
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

       <div className='img-city-container'> 
          <img  className="city-first-img" src={'../public/'+city.img2} alt="" />
       </div>

          <div className='text-up-city'> <p>
              {city.text}
               </p>  </div>
         
          </div>   
</div>

<div className='form-container'>

      <form action="" onSubmit={handleSubmit} className='form-wrapper'>
        <SelectorFormPlaces
         name={'massage'}
        options={options1}
        />
          <SelectorFormPlaces
          name={'degustation'}
        options={city.degustation.map((el) => {
          return( {value: el, label: el})
        })}
        />
          <SelectorFormPlaces
         name={'cuisine'}
        options={options3}
        />
          <SelectorFormPlaces
         name={'budget'}
        options={options4}
        />
        <button> Submit </button>
      </form>

</div>



    </div>
  )
}

export default CityPlanPage
