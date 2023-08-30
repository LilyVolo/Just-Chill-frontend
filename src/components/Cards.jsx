import React from 'react';
import './cards.css';
const API_URL = import.meta.env.VITE_API_URL;
import CardItem from './CardItem';
import { useState, useEffect } from "react";
import axios from "axios";

function Cards() {
  const [cities, setCities] = useState([]);
  async function fetchAllCities() {
    try {
      const response = await axios.get(`${API_URL}/cities`);

		
      setCities(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllCities();
  }, []);

  if (!cities) {
    return <div className="Loading"> Loading..</div>;
  }


  return (
    <div className='cards'>
      <h1>Check out these Destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {cities.map((city) => {
              return (
                <CardItem
                key={city._id}
                src={city.img}
                text= {city.description}
                label={city.label}
                path={'/city/'+city._id}
              />
              )
            }
            )}
      
      
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='1.jpg'
              text='Taste delicious teas in a traditional setting'
              label='tea ceremony'
              path='/services'
            />
            <CardItem
              src='2.jpg'
              text='Take a relaxing aroma or scandinavian bath.'
              label='aroma bath'
              path='/products'
            />
            <CardItem
              src='3.jpg'
              text='Experience different types of massage'
              label='massage'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;