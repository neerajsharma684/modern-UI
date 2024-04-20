import React from 'react';
import './whatai.css';
import { Feature } from '../../components';

const WhatAI = () => {
  return (
    <div className='newai__whatai section__margin' id='wai'>
      <div className='newai__whatai-feature'>
        <Feature title='What is GPT-3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est obcaecati non sequi omnis autem nam? Eum soluta tenetur reprehenderit quos nihil atque pariatur sapiente, at cupiditate dolor eaque nam?'/>
      </div>
      <div className='newai__whatai-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination!</h1>
        <p>Explore the Library</p>
      </div>
      <div className='newai__whatai-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid optio eligendi provident, molestias illum corporis facilis nesciunt magni deserunt iure temporibus quisquam culpa omnis eveniet. Dolore, sed. At, magni?"/>
        <Feature title="Knowledge" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt aperiam voluptatem modi reprehenderit sint eius atque iste tempore adipisci, omnis ab laudantium ad dolorum dolores porro dolorem perferendis et!"/>
        <Feature title="Education" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, id minima, tempora debitis illo quis omnis blanditiis suscipit modi vitae, eaque ad quos repellat nemo accusamus mollitia pariatur? Dignissimos, quaerat!"/>
      </div>
    </div>
  )
}

export default WhatAI;
