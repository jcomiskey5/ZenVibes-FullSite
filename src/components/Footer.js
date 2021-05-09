import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
  const spaAddress = "5038 Serenity Way \nSan Jose, CA 95152"
  const spaPhone = "(408) 555-2522"
  
  return (
    
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the ZenVibes newsletter to receive our latest discounts and specials
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
              <h2>Hours</h2>
               <ul class ="hours">
                <li>
                  M-F: 10am - 7pm
                </li>
                <li>
                  Sat/Sun: 10am - 7pm
                </li>
               </ul>
          </div>
        <div class='footer-link-items'>
            <h2>Location</h2>
            <ul class ="location">
              <li class="li-location">
                {spaAddress}
              </li>
              <li class="li-phone">
                {spaPhone}
              </li>
            </ul>
          </div>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/book-appt'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              ZenVibes
              <i class="fas fa-spa"></i>
            </Link>
          </div>
          <small class='website-rights'>ZenVibes © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
