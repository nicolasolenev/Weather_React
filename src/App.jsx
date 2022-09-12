import React, { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'
// import {FormSearch} from './FormSearch.jsx'
// import {InfoBlock} from './InfoBlock.jsx' 

import {FormSearch} from './components/FormSearch.jsx'
import {InfoBlock} from './components/infoBlock/infoBlock.jsx'
import {WeatherData, WeatherDataForecast} from './components/Request.jsx'



function AppWeather() {

  const [weatherData, setWeatherData] = useState({});
  const [weatherDataForecast, setWeatherDataForecast] = useState({});
  const [favCityList, setFavCityList] = useState([]);

  React.useEffect(() => console.log(favCityList));

  async function handleWeatherData(city) {
    const weatherData = await WeatherData(city);
    const weatherDataForecast = await WeatherDataForecast(city);

    setWeatherData(weatherData);
    setWeatherDataForecast(weatherDataForecast);
    console.log(weatherData);
    // console.log(weatherDataForecast.city.name);
  }

  function handleFavCityList(city) {
    const addCity = favCityList.find(el => el.name === city);
    if(addCity) return;

    const favCity = {
      name: city,
      id: Date.now(),
    }
    setFavCityList(favCityList.concat(favCity));
    console.log(favCityList);
  }

  function handleDelFavCity(city) {
    const index = favCityList.findIndex(el => el.name === city);
    favCityList.splice(index, 1);
    setFavCityList(favCityList);
    console.log(favCityList);
  }

  return (
    <div className="weather__wrapper">
      <FormSearch onSubmit={handleWeatherData}/>
      <InfoBlock 
        weatherData={weatherData}
        weatherDataForecast={weatherDataForecast}
        onClick={handleFavCityList}
        favCityList={favCityList}
        onClickDelFavCity={handleDelFavCity}
      />
    </div>
  )

}


/* function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
} */

export default AppWeather;
