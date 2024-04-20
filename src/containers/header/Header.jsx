import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='newai__header section__padding' id='home'>
      <div className='newai__header-content'>
        <h1 className='gradient__text'>Let's Dive into the World of AI</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum natus perspiciatis harum ea. Illum, quia praesentium. Placeat ducimus, omnis inventore unde accusantium velit fugit nisi, totam vitae exercitationem accusamus explicabo?</p>
        <div className='newai__header-content__input'>
          <input type="email" placeholder='Your Email ...'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='newai__header-content__people'>
          <img src={people} alt="People" />
          <p>1,690 people requested access.</p>
        </div>
      </div>
      <div className='newai__header-image'>
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header
