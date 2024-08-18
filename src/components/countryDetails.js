import React from 'react';
import { useCountries } from '../context/countryContext';
import { useNavigate } from 'react-router-dom';

function CountryDetails() {
    const { selectedCountry } = useCountries();
    const navigate = useNavigate();

    if (!selectedCountry) {
        return (
        <><p>No country selected</p><button onClick={() => navigate(-1)}>Back to Countries</button></>
        );
    }

    return (
        <div style={{fontSize:"20px"}}>
            <h1>Country Details</h1>
            <p><b>Name:</b> {selectedCountry.name}</p>
            <p><b>Capital:</b> {selectedCountry.capital}</p>
            <img src={selectedCountry.flag} alt={`Flag of ${selectedCountry.name}`} style={{width:"250px"}} />
            <p><b>Currency:</b> {selectedCountry.currencies[0].name} ({selectedCountry.currencies[0].code})</p>
            <p><b>Currency Sign:</b> {selectedCountry.currencies[0].symbol}</p>
            <button className='back-btn' onClick={() => navigate(-1)}>Back to Countries</button>
        </div>
    );
}

export default CountryDetails;
