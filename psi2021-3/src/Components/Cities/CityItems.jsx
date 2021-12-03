import React from 'react'

const CityItems = ({param}) => {

    const readySRC = (country) => {
        let temp =  "https://flagcdn.com/".concat(country.toLowerCase()).concat(".svg");
        console.log(temp)
        return temp;
    }

    return (
        <div className='card'>
        <div className='card-inner'>
          <div className='card-back'>
            <img src={readySRC(param.countryCode)}  width="400" alt='' />
          </div>
          <div className='card-front'>
            <h1>{param.name}</h1>
            <ul>
              <li>
                <strong>City:</strong> {param.city}
              </li>
              <li>
                <strong>Country:</strong> {param.country}
              </li>
              <li>
                <strong>Region:</strong> {param.region}
              </li>
              <li>
                <strong>Population:</strong> {param.population}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}



export default CityItems
