import React from 'react';
import './footer.css';
import aiLogo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='newai__footer section__padding'>
      <div className='newai__footer-heading'>
        <h1 className='gradient__text'>Want to Step into the Future?</h1>
      </div>
      <div className='newai__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='newai__footer-links'>
        <div className='newai__footer-links_logo'>
          <img src={aiLogo} alt="GPT-3 Logo" />
          <p>All rights reserved. Just kidding &#128514;&#128514;</p>
        </div>
        <div className='newai__footer-links_div'>
          <h4>Links</h4>
          <p>Instagram</p>
          <p>X</p>
          <p>Youtube</p>
        </div>
        <div className='newai__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='newai__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>+91 9588084715</p>
          <p>neerajmudgal684@gmail.com</p>
        </div>
      </div>
      <div className='newai__footer-copyright'>
        <p>&copy; 2023 Artificial Inteligence. All rights reserved. <br /> There is no copyright for this &#128514;&#128514;&#128514;</p>
      </div>
    </div>
  )
};

export default Footer
