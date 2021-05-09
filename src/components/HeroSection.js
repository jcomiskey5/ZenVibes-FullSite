import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Delayed from './Delayed';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/spapromo-1.mp4' autoPlay muted />
        <Delayed waitBeforeShow={26000}>
        <h1 className='hero-answer'>Tranquility Awaits</h1>
        <p className='hero-question'>What are you waiting for?</p>
        <div className='hero-btns'></div>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
        </Delayed>
    </div>
  );
}

export default HeroSection;
