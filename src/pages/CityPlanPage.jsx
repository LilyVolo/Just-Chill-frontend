import React from 'react'
import InfoBlocup from '../components/InfoBlockup'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
const API_URL = 'http://localhost:5005/api'
import Select from 'react-select';
import SelectorFormPlaces from '../components/SelectorFormPlaces'
import "./CityPage.css"
import { Button} from "../components/Button.jsx"


function CityPlanPage() {


  const {id} = useParams();
  const [city, setCity] = useState(null);
  const [plan, setPlan] = useState(null);
  const navigate =  useNavigate()



  const options3 = [
    { value: 'french', label: 'french' },
    { value: 'italian', label: 'italian' },
    { value: 'russian', label: 'russian' }]

  const options4 = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' }]


    async function fetchTargetCity() {
    try {
      const response = await axios.get(`${API_URL}/cities/${id}`);
      setCity(response.data);
    } catch (error) {
      console.log(error);
    } }
    

    async function fetchRestaurant(selectedOption3, selectedOption4 ) {
      const apiUrl    = '/gapi/maps/api/place/textsearch/json';
      const cityName  = city.label;
      const query     = `restaurant ${selectedOption3} à ${cityName}`;

      const restaurant = await axios.get(apiUrl, {
            params: {
              query,
              radius: 10000,
              maxprice: selectedOption4,
              key: import.meta.env.VITE_GAPI_KEY
            }
          }).catch(error => {
            console.error('Error fetching data:', error);
          });


      return restaurant.data.results.filter(result => {
        // Filter based on budget and review criteria
        const meetsBudgetCriteria = result.price_level && result.price_level <= selectedOption4; // Example: Budget is low to moderate
        const meetsReviewCriteria = result.rating && result.rating >= 4.0; 
        return meetsBudgetCriteria && meetsReviewCriteria;
      })
  
    }

    useEffect(() => {
      fetchTargetCity();
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
      const restaurant =  await fetchRestaurant(selectedOption3, selectedOption4)
      let allplanData = [...response.data, restaurant]
      navigate('/plan', {state: allplanData})

      console.log(allplanData, '27/08 check')
    }
    catch (error) {
      console.log(error);
    } 
  }

    
    if (!city) {
      return <div className="Loading"> Loading..</div>;
    }
  return (
  <div className='main-city-page-cintainer'>
        <div className="city-up-container" > 
        <div className="city-container-wrapper">

       <div className='img-city-container'> 
          <img  className="city-first-img" src={`/paris/${city.img1}`} alt="" />
       </div>

          <div className='text-up-city'> <p>
              {city.text}
               </p>  </div>
         
          </div>   
</div>

<div className='form-container'>
<form action="" onSubmit={handleSubmit} className='form-wrapper'>

    <div className='firs-block block'>
    <SelectorFormPlaces
         name={'massage'}
         options={city.massage.map((el) => {
          return( {value: el, label: el})
        })}
        />
           <img className="img_places" src={`../public/paris/${city.img2}`}  alt="" />
           {console.log(`../public/paris/${city.img2}`)}
    </div>

    <div className='second-block block'>
    <img className="img_places" src={`../public/paris/${city.img3}`} alt="" />
    
    <SelectorFormPlaces
          name={'degustation'}
        options={city.degustation.map((el) => {
          return( {value: el, label: el})
        })}
        />
      </div>
      <div className='third-block block'>
     
      
      <SelectorFormPlaces id="selecta"
         name={'budget'}
        options={options4}
        />

      <SelectorFormPlaces 
         name={'cuisine'}
        options={options3}
        />
    
   

        
        <img className='paris4 img_places' src={`../public/paris/${city.img4}`} alt="" />
        </div>
       
     <button>
      Submit
     </button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Submit
        </Button> */}
      </form>

</div>



    </div>
  )
}

export default CityPlanPage
