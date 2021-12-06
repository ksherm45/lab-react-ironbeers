import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from  "react-router-dom";

import Home from './pages/Home';
import Beer from './components/Beer';
import Beers from './pages/Beers';
import BeerDetail from './pages/BeerDetail';

function App() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    (async() => {
      const data = await fetch('https://ih-beers-api2.herokuapp.com/beers')
      const response = await data.json()
      console.log(response)
      setBeers(response)
    })()
  }, [])

  if(!beers.length) {
    return null
  }

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/beers" element={<Beers beers={beers}></Beers>}></Route>
        <Route path="/beers/:id" element={<BeerDetail></BeerDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;