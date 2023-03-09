import "./current-weather.css"


const CurrentWeather = ({data}) =>{
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-desc">{data.weather[0].description}</p>
                </div>
                <img alt = "weather" className="weather-icon" src = {require(`../icon/${data.weather[0].icon}.png`)}/>
            </div>
            <div className="bottom">
                <p className="temprature">
                    {Math.round(data.main.temp)}°C
                </p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">
                            details
                        </span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">wind</span>
                        <span className="p`arameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CurrentWeather;