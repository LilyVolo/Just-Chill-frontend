import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='paris.jpg'
              text='City of contrasts, romantic medieval streets side by side with modern entertainment'
              label='Paris'
              path='/services'
            />
            <CardItem
              src='peterburg.jpg'
              text='Weekend in the cultural capital of Russia, a city famous for its white nights, small bars and streets described by Dostoevsky'
              label='Saint Peterburg'
              path='/services'
            />
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
              text='Take a relaxing aroma or scandinavian bath. Also you can try our new option - cedar barrel'
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