
import React from 'react';
import Factuurgenerator from './components/Factuurgenerator';
import Lesplanning from './components/Lesplanning';
import SocialPost from './components/SocialPost';
import ReviewRequest from './components/ReviewRequest';

function App() {
  return (
    <div>
      <h1>LesPlan</h1>
    <img src="/lesplan-logo.png" alt="LesPlan logo" />
      <Factuurgenerator />
      <Lesplanning />
      <SocialPost />
      <ReviewRequest />
    </div>
  );
}

export default App;
    
