import './App.css';
import Search from './Components/search';
import Current_weather from './Components/Current_weather'
import {WEATHER_API_URL,WEATHER_API_KEY} from './Components/Api'
import { useState } from 'react';
import Forecast from './Components/Forecast';


function App() {
  const [CurrentWeather,setCurrentWeather] = useState(null);
  const [foreCast,setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
    const [lat,lon] = searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const foreCastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([CurrentWeatherFetch,foreCastFetch])
    .then(async(Response)=>{
      const weatherResponse = await Response[0].json();
      const foreCastResponse = await Response[1].json();

      setCurrentWeather({city:searchData.label, ...weatherResponse});
      setForecast({city:searchData.label, ...foreCastResponse});
    })
    .catch((err)=> console.log(err));
  }
  console.log(CurrentWeather);
  console.log(foreCast);
  return (
    <div className="container2">

      <Search onSearchChange={ handleOnSearchChange}/>
      {CurrentWeather && <Current_weather data ={CurrentWeather}/>}
      {foreCast && <Forecast data = {foreCast}/>}
    </div>
     
      
  );
}

export default App;

