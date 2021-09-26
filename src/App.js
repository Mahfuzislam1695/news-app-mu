import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';
import Songbad from './components/Songbad/Songbad';


function App() {
const [articles, setArticles] = useState([]);  

useEffect( () => {
  fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=f51649ee5ee74f15b3497a9d67fe5790')
  .then(response => response.json())
  .then(data => setArticles(data.articles))
},[])

  return (
    <div>
      <h2>Headlines:{articles.length}</h2>
      {
        articles.map(article => <Songbad article ={article}></Songbad>)
      }
    </div>
  );
}

export default App;
