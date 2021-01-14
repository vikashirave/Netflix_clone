import React from 'react';
import './App.css';
import Row from './Row';
import axios from './axios';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hello clever programmer</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      
    </div>
  );
}

export default App;



