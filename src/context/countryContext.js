import React, { createContext, useState, useContext } from 'react';

const CountryContext = createContext();

export const useCountries = () => useContext(CountryContext);

export const CountryProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const value = {
        countries,
        setCountries,
        selectedCountry,
        setSelectedCountry
    };

    return (
        <CountryContext.Provider value={value}>
            {children}
        </CountryContext.Provider>
    );
};
