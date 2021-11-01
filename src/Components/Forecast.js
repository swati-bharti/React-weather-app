import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Card} from 'semantic-ui-react'

export default function Forecast({latitude, longitude}){
    
    const baseUrl =  'https://api.openweathermap.org/data/2.5/onecall?';
    const apiKey =  '87eb04e63a1d2d86f382d92a06242e9c'
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    const [forecast, setForecast] = useState([])
   
    let fetchUrl = `${baseUrl}lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${apiKey}&units=metric`

    useEffect(() =>{
        axios.get(fetchUrl)
        .then((forecastData) => {
            //console.log(forecastData)
            console.log(forecastData.data.daily)
            console.log(forecastData.data.daily.weather)
            setForecast(forecastData.data.daily)
    })},[fetchUrl]);

    return (
        <div style={{marginTop:20}}>
            <Card.Group itemsPerRow ={4}>
                {forecast.map((data) =>{
                    return(
                        <Card className='forecast-card'>
                        <Card.Content>
                            <Card.Header className='forecast-header'><img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="weather status icon"
                className="icon-container-forecast"
              />
                                Temperature:{Math.round(data.temp.max + data.temp.min)/2} ℃ 
              </Card.Header>
                                <Card.Meta>{new Date(data.dt *1000).toLocaleDateString(undefined, options)}</Card.Meta>
                            <Card.Description><b>Humidity</b>: {data.humidity}%</Card.Description>
                            <Card.Description className='temp-desc'>
                                <b>Weather</b>: {data.weather[0].description}
                            </Card.Description>
                        </Card.Content>
                        </Card>
                    )
                })}
                </Card.Group> 
            
           
            </div>
)}