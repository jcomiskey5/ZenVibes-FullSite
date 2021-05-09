import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import AboutUs from '../AboutUs';

export default function About() {
  return(
    <>
    <h1 className='about'>ABOUT US</h1>
    <div className = 'MoreAboutContainer'>
      <div className = 'AboutContainer'>
        <div className = 'AboutText'>
        <AboutUs/>
        <div className = 'spa-team'>
          <img src='images/spa-team.jpg' className="ZenVibes-Team" alt =''></img>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}