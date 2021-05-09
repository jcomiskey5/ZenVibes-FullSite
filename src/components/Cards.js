import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {

  return (
    <div className='cards'>
      <h1 className='card-title'>Packaged Deals</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/packaged-deal.jpg'
              text=  "Enjoy a 60 minute mineral soak, 60 minute Swedish massage followed by a 45 minute hydrating facial."
              label='R&R Package - $140'
              path='/services'
            />
            <CardItem
              src='images/couples-massage.jpg'
              text='Enjoy the day with a loved one. Start with a 90 minute mineral soak with complimentary wine, 90 minute Swedish massage, and a 45 minute hydrating facial.'
              label= "Lover&apos;s Package - $320"
              path='/services'
            />
          </ul>
        </div>
      </div>
      <h1 className='card-title'>A La Carte</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/swedish-massage.png'
              text='60 Min: $70'
              texttwo= "90 Min: $100"
              textthree= "120 Min: $130"
              label='Swedish Massage'
              path='/services'
            />
            <CardItem
              src='images/deep-tissue.jpg'
              text='60 Min: $80'
              texttwo= "90 Min: $110"
              textthree= "120 Min: $140"
              label='Deep Tissue'
              path='/services'
            />
              <CardItem
              src='images/hot-stone.jpg'
              text='60 Min: $100'
              texttwo='90 Min: $120'
              label='Hot Stone Massage'
              path='/services'
            />
            <CardItem
              src='images/hydrating-facial.png'
              text='Includes cleanse, exfoliating, hydrating mask/steam.'
              texttwo='45 Min: $60'
              label='Hydrating Facial'
              path='/services'
            />
              <CardItem
              src='images/european-facial.jpeg'
              text='Includes cleanse, exfoliating, hydrating mask/steam, and massage of neck, shoulders, and hands.'
              texttwo='45 Min: $80'
              label='European Facial'
              path='/services'
            />
            <CardItem
              src='images/private-soak.jpg'
              text='60 Min: $25'
              texttwo='90 Min: $35'
              label='Private Mineral Soak'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
