import React, { useState, useEffect } from 'react';
import './App.css';
import testData from './data/data.js';
import yesImage from './imgs/yes.jpeg';
import noImage from './imgs/no.jpg';


const data = {
  october: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1]
}

function App() {

  const dateTime = new Date();
  const checkVal = checkLunchAvailability(dateTime.toLocaleDateString(), testData);

  useEffect(() => {
    console.log(testData, '@@@#$#@$@');
  })

  return (
    <div className="App">
      <div className='container'>
        <h2>Is there lunch today?</h2>
        <h1>{checkVal ? 'YES!': 'NO...'}</h1>
        <img className='image' src={checkVal? yesImage: noImage} />
      </div>
    </div>
  );
}

const checkLunchAvailability = (dateString, data) => {
  var currDate = parseInt(dateString.substring(3, 5)); 
  return data['october']['eric'][currDate - 1] === 1 || data['october']['barbara'][currDate - 1] === 1;
}

export default App;
