import React, { useEffect, useState } from 'react';
import '../components/Home.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState({
    celcius: 10,
    name: 'London',
    humidity: 10,
    speed: 2,
    image: cloud_icon,
  });
  const [name, setName] = useState('');

  const handleClick = () => {
    if (name !== '') {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8cbeeb63fbb5f70ad97c818c4deb34b1&units=metric`;
      axios.get(apiUrl)
        .then(res => {
          let imagePath = '';
          if (res.data.weather[0].main === 'Clouds') {
            imagePath = cloud_icon;
          } else if (res.data.weather[0].main === 'Clear') {
            imagePath = clear_icon;
          } else if (res.data.weather[0].main === 'Rain') {
            imagePath = rain_icon;
          } else if (res.data.weather[0].main === 'Drizzle') {
            imagePath = drizzle_icon;
          } else if (res.data.weather[0].main === 'Mist') {
            imagePath = snow_icon;
          } else {
            imagePath = cloud_icon;
          }
          console.log(res.data);
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            image: imagePath,
          });
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='weather-container'>
      <div className='weather'>
        <div className='search'>
          <input
            type='text'
            placeholder='Enter City Name'
            onChange={e => setName(e.target.value)}
          />
          <button onClick={handleClick}>
            <img src={search_icon} alt='' />
          </button>
        </div>
        <div className='winfo'>
          <img src={data.image} alt='' className='icon' />
          <h1>{Math.round(data.celcius)}</h1>
          <h2>{data.name}</h2>

          <div className='details'>
            <div className='col'>
              <img src={humidity_icon} alt='' />
              <div className='humidity'>
                <p>{Math.round(data.humidity)}</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className='col'>
              <img src={wind_icon} alt='' />
              <div className='wind'>
                <p>{Math.round(data.speed)}km/h</p>
                <p>wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;




// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       <h1>Home Weathe app</h1>
//     </div>
//   )
// }

// export default Home
