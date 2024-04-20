import React from 'react';
import './article.css';

const article = ({imgURL, date, title}) => {
  return (
    <div className='newai__blog-container_article'>
      <div className='newai__blog-container_article-image'>
        <img src={imgURL} alt="blog" />
      </div>
      <div className='newai__blog-conatiner_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  )
}

export default article
