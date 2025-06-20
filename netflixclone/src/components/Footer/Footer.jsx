// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="Facebook" />
        <img src={instagram_icon} alt="Instagram" />
        <img src={youtube_icon} alt="YouTube" />
        <img src={twitter_icon} alt="Twitter" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre </li>
        <li>Investor Relations</li>
        <li>Jobs </li>
        <li>Terms of use </li>
        <li>Privacy </li>
        <li>Legal Notice </li>
        <li>Cookie Preferences </li>
        <li>Corporate Information </li>
         <li>Contact us </li>
      </ul>
      <p className='copyright-text'>
        All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
