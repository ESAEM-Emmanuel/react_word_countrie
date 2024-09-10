import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const CountryList = () => {
  const [data, setData] = useState([]);
  const [sorteData, setSorteData] = useState([])
  const [playOnce, setPlayOnce] = useState(true)
  const [rangeValues, setRangeValues] = useState(40)
  const [selectedRadio, setSelectedRadio] = useState('')
  const radios = ['Africa', 'Asia', 'Europe', 'America', 'Oceania']

  useEffect(() => {
    if (playOnce) {
      axios
        .get('https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags')
        .then((res) => {
          setData(res.data)
          setPlayOnce(false)
        })
        .catch((error) => console.error(error));
    }
  
    if (data.length > 0) {  // Vérifie si les données existent avant de trier
      const sortedCountry = () => {
        const sortedArray = [...data].sort((a, b) => {
          return b.population - a.population
        })
        sortedArray.length = rangeValues
        setSorteData(sortedArray)
      }
      sortedCountry()
    }
  }, [data, playOnce, rangeValues])

  return (
    <div className='countries'>
      <div className='radio-container'>
        <input type="range" min = '1' max='250' value={rangeValues}
        onChange={(e) => setRangeValues(e.target.value)}/>
        <ul>
          {radios.map((radio) =>{
            return (
              <li key={radio}>
                <label htmlFor={radio}>{radio}</label>
                <input
                  type="radio"
                  value={radio}   // Utilise la valeur de la variable `radio`
                  id={radio}
                  checked={radio === selectedRadio}   // Vérifie si le bouton radio est sélectionné
                  onChange={(e) => setSelectedRadio(e.target.value)}   // Gère le changement de sélection
                />
              </li>
            )
          })}
        </ul>
      </div>
      <div className='cancel'>
        {selectedRadio && <h5 type = 'button'onClick={() => setSelectedRadio('')}>Annuler recherche</h5>}
      </div>
      <ul className='countries-list'>
        
        {/* {data.map((country, index) => ( */}
        {sorteData
        .filter((country) => country.region.includes(selectedRadio))
        .map((country, index) => (
            <Card country = {country} key = {country.name.common} />
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
