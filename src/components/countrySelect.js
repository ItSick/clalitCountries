import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCountries } from '../context/countryContext';



function Countries() {
    const { countries, setCountries, setSelectedCountry } = useCountries();

    const [input, setInput] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/countries')
            .then(response => setCountries(response.data.filter(x => x.region === "Asia")))
            .catch(error => console.error('There was an error!', error));
    }, [setCountries]);

    useEffect(() => {
        const filtered = countries.filter(country => 
            country.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredCountries(filtered);
    }, [input, countries]);

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
    };

    return (
        <div>
            <h1>Countries</h1>
            {error && <p>{error}</p>}
            <input 
                type="text" 
                className='select'
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Search countries in Asia"
            />
            {input && (
                <ul style={{ listStyleType: 'none' }}>
                    {filteredCountries.map(country => (
                        <li key={country.name}>
                            <Link onClick={() => handleCountryClick(country)} to={`/country-details/${country.name}`}> 
                            <p><b>Name:</b> {country.name}</p>
                            </Link>
                            <p> <b>Capital:</b> {country.capital}</p>
                            <p><img src={country.flag} alt={`Flag of ${country.name}`} className='flag' /></p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Countries;
