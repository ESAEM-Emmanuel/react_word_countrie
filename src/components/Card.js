import React, {Fragment}from 'react'

function Card(props) {
    const {country} = props
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")
    }
    return (

        <div className='card'>
            <img
                src={`${country.flags.svg}`}
                alt={`${country.flags.alt}`}
                width="50"
                />
            <ul className='data-container'>
                <li>{country.name.common}</li>
                <li>Capital: {country.capital ? country.capital[0] : 'N/A'}</li>
                <li>Population: {numberFormat(country.population)}</li>
                <li>Region: {country.region}</li>
            </ul>
        </div>
    )
}

export default Card
