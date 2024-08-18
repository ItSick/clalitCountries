import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CountryProvider } from './context/countryContext';
import Countries from './components/countrySelect';
import CountryDetails from './components/countryDetails';
import './App.css';

function App() {
  return (
    <div className="App">

    <Router>
      <CountryProvider>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country-details/:name"  element={<CountryDetails />} />
        </Routes>
      </CountryProvider>
    </Router>
  
    </div>
  );
}

export default App;
