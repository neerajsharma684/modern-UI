import React from 'react';
import './blog.css';
import {Article} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports'

const Blog = () => {
  return (
    <div className='newai__blog section__padding' id='blog'>
      <div className='newai__blog-heading'>
        <h1 className='gradient__text'>Read the Latest Blogs.</h1>
      </div>
      <div className='newai__blog-container'>
        <div className='newai__blog-container_groupA'>
          <Article imgURL={blog01} date='Dec 30, 2023' title='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab repudiandae asperiores, id, explicabo dicta rem aspernatur, quasi quam necessitatibus illo sed? Laudantium deserunt ipsa esse dolores ex, placeat odio laborum?'/>
        </div>
        <div className='newai__blog-container_groupB'>
          <Article imgURL={blog02} date='Dec 28, 2023' title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia tenetur voluptatibus a recusandae expedita odit quisquam veritatis cupiditate corrupti, officiis nesciunt voluptatum at repudiandae maxime illum velit quia facere.'/>
          <Article imgURL={blog03} date='Dec 25, 2023' title='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi porro ad rem accusantium voluptatum voluptate repellendus, voluptas maxime asperiores nesciunt, ea ipsam officiis dolorem aut soluta! Possimus adipisci facilis iure!'/>
          <Article imgURL={blog04} date='Nov 28, 2023' title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure eligendi voluptatibus fugit eius! Tempore a culpa cum eum sed? Consequatur optio blanditiis soluta reiciendis, provident sunt dignissimos molestiae tempora?'/>
          <Article imgURL={blog05} date='Jul 26, 2023' title='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem cumque ipsa, quasi nisi aspernatur nam, nemo minima est, minus ad nulla qui et fugit repellendus commodi aperiam animi consequatur rem!'/>
        </div>
      </div>
    </div>
  )
}

export default Blog
