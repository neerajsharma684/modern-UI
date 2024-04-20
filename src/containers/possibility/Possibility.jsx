import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='newai__possibility section__padding' id='possibility'>
      <div className='newai__possibility-image'>
        <img src={possibilityImage} alt="Possibility" />
      </div> 
      <div className='newai__possibility-content'>
        <h4>Request Early Access to Get Started!</h4>
        <h1 className='gradient__text'>The Possibilities are beyond our imaginations.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur harum cumque, in obcaecati laborum voluptatem? Id veniam vero laudantium libero fugiat inventore nostrum fuga voluptatum dolor corrupti! Possimus, nesciunt commodi?</p>
        <h4>Request Early Access to Get Started!</h4>
      </div>
    </div>
  );
}

export default Possibility
