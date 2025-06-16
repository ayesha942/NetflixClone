import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-cons">
        <img src={facebook_icon}></img>
         <img src={instagram_icon}></img>
          <img src={youtube_icon}></img>
           <img src={twitter_icon}></img>
      </div>
    </div>
  )
}

export default Footer
