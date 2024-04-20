import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
  title: 'Improving and distrusts instantly',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum iure libero beatae? Corrupti minima quo iure veniam pariatur eaque officia neque atque adipisci? Vero harum accusantium atque tenetur quisquam itaque.'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat possimus, hic nobis suscipit itaque dolorem commodi, ut odit impedit dolorum reprehenderit officiis optio, cumque nihil enim esse! Sunt, nam dolores!'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi atque magni inventore officia error temporibus sequi consequatur necessitatibus ut voluptate blanditiis rerum voluptatum, repudiandae aliquid harum ipsa minima quae.'
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, rerum fuga saepe temporibus deleniti vitae eum, eius error voluptates dolore non perspiciatis corrupti nemo! Nisi cumque asperiores blanditiis alias quis.'
  }
]
const Features = () => {
  return (
    <div className='newai__features section__padding' id='features'>
      <div className='newai__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize it. Step into the Future Today & Make it Happen.</h1>
        <p>Request Early access to Get Started!</p>
      </div>
      <div className='newai__features-container'>
        {featuresData.map((item, index) => (
          <Feature  title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features
