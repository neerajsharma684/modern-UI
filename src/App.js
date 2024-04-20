import React from 'react';

import {Footer, Blog, Features, Header, Possibility, WhatAI} from './containers';
import {Cta, Brand, Navbar} from './components';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatAI />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />    
    </div>
  )
}

export default App