import React from 'react'
import axios from "axios"
import service from '../service/service'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import Select from 'react-select';
import SelectorFormPlaces from '../components/SelectorFormPlaces'
import "./CityPage.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function CityPage() {


  const {id} = useParams();
  const [city, setCity] = useState(null);
  const [plan, setPlan] = useState(null);
  const navigate =  useNavigate()



  // const options3 = [
  //   { value: 'french', label: 'french' },
  //   { value: 'italian', label: 'italian' },
  //   { value: 'russian', label: 'russian' }]

  // const options4 = [
  //     { value: '1', label: '1' },
  //     { value: '2', label: '2' },
  //     { value: '3', label: '3' },
  //     { value: '4', label: '4' }]


    async function fetchTargetCity() {
    try {
      const response = await service.get(`/cities/${id}`);
     
      setCity(response.data);
     
    } catch (error) {
      console.log(error);
    } }
    

//     async function fetchRestaurant(selectedOption3, selectedOption4 ) {
//       const apiUrl    =  import.meta.env.VITE_GAPI_URL;
//       const cityName  = city.label; 
//       const query     = `restaurant ${selectedOption3} à ${cityName}`;
      
//       const restaurant = await axios.get(apiUrl, {
//         params: {
//           query,
//           radius: 10000,
//           maxprice: selectedOption4,
//         }
//       }).catch(error => {
//         console.error('Error fetching data:', error);
//       });

//       console.log(restaurant)
//       return restaurant.data.results.filter(result => {
//         // Filter based on budget and review criteria
//         const meetsBudgetCriteria = result.price_level && result.price_level <= selectedOption4; // Example: Budget is low to moderate
//         const meetsReviewCriteria = result.rating && result.rating >= 4.0; 
//         return meetsBudgetCriteria && meetsReviewCriteria;
//       })

// }

    useEffect(() => {
      fetchTargetCity();
    }, [id]);



    async function handleSubmit (event) {
      event.preventDefault()
      const target = event.target
      const formData = new FormData(target)
      const selectedOption = formData.get('massage')
      const selectedOption2= formData.get('degustation')
      const selectedOption3 = formData.get('cuisine')
      
      try {
      const response = await  service.get(`/cities/${id}/places?option1=${selectedOption}&option2=${selectedOption2}&option3=${selectedOption3}`);
      setPlan(response.data)  
      // const restaurant =  await fetchRestaurant(selectedOption3, selectedOption4)
      let allplanData = {infos: response.data, city: id}
  
      navigate('/plan', {state: allplanData})

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
   
   
<Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          city.slimg.map((el) => {
            return (
       
              <SwiperSlide key={el}><img className="img_places" src={`${city.name}/${el}`} alt="" /></SwiperSlide>
              // {`../public/${city.img2}`}
            )
          })
        }
      
      </Swiper>
         

      <div className='top-box'>

<div className='texxt-container'>

  <h2>
    {city.text}
  </h2>
</div>
      </div>
      <div className="triangle"></div>
<div className='form-container'>

<form action="" onSubmit={handleSubmit} className='form-wrapper'>

    <div className='firs-block block'>
      <div>
        <p className='selector-option'>Choose the type of relaxation</p>
    <SelectorFormPlaces
        name={'massage'}
        options={city.massage.map((el) => {
          return( {value: el, label: el})
        })}
        />
        </div>
        
           <img className="img_places" src={city.img2}  alt="" />

    </div>

    <div className='second-block block'>
    <img className="img_places" src={city.img3} alt="" />
    
    <div>
      <p className='selector-option'>Choose a tasting option</p>
      <SelectorFormPlaces
          name={'degustation'}
          options={city.degustation.map((el) => {
            return( {value: el, label: el})
          })}
      />
      </div>
    </div>

      <div className='third-block block'>   
<div className='small-box'>
<p className='selector-option-third'> Indicate what cuisine you prefer </p>
      {/* <SelectorFormPlaces id="selecta"
         name={'budget'}
        options={options4}
        /> */}

      <SelectorFormPlaces 
         name={'cuisine'}
         options={city.restaurant.map((el) => {
          return( {value: el, label: el})
        })}
        // options={options3}
        />
</div>
        <img className='paris4 img_places' src={city.img4} alt="" />
        </div>
       
     <button className='button'>
      Submit
     </button>
      </form>

</div>



    </div>
  )
}

export default CityPage
