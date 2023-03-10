import React from 'react'
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion"
import "./Forecast.css"


const WEEK_DAYS  = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

function Forecast({data}) {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,dayInAWeek));
  return (
    <div>
      <label htmlFor="" className="title">Daily</label>
      <Accordion allowZeroExpanded >
         {data.list.splice(0,7).map((item,idx)=>(
          <AccordionItem key = {idx}>
            <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img alt = "weather" className= "icon-small" src = {require(`../icon/${item.weather[0].icon}.png`)}/>

                    <label htmlFor="" className="day">
                      {forecastDays[idx]}
                    </label>
                    <label htmlFor="" className="decription">
                      {item.weather[0].description}
                    </label>
                    <label htmlFor="" className="min-max">
                      {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C
                    </label>

                  </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daild-details-grid-item">
                  <label htmlFor="">
                    pressure
                  </label>
                  <label htmlFor="">
                    {item.main.pressure}hPa
                  </label>
                </div>
                
                <div className="daild-details-grid-item">
                  <label htmlFor="">
                    Humidity
                  </label>
                  <label htmlFor="">
                    {item.main.humidity}%
                  </label>
                </div>
                
                <div className="daild-details-grid-item">
                  <label htmlFor="">
                    Clouds
                  </label>
                  <label htmlFor="">
                    {item.clouds.all}%
                  </label>
                </div>
                
                <div className="daild-details-grid-item">
                  <label htmlFor="">
                    Wind speed
                  </label>
                  <label htmlFor="">
                    {item.wind.speed} m/s
                  </label>
                </div>
                
                <div className="daild-details-grid-item">
                  <label htmlFor="">
                    sea level
                  </label>
                  <label htmlFor="">
                    {item.main.sea_level} m
                  </label>
                </div>
                
                <div className="daild-details-grid-item">
                  <label htmlFor="">
                    Feels like
                  </label>
                  <label htmlFor="">
                    {Math.round(item.main.feels_like)}°C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
         ))}
      </Accordion>
    </div>
  )
}

export default Forecast
