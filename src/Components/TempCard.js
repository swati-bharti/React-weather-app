import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import moment from 'moment'

export default function TempCard({details}){

  return(
  <Card className ='temp-card-main'>
    <Card.Content>
      <Card.Header className='temp-card-child'>{details.name}
       <img
            src={`http://openweathermap.org/img/w/${details.weather[0].icon}.png`}
            alt="weather status icon"
            className="icon-container"/>
      </Card.Header>
    </Card.Content>

    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <h5 className='temp-card-child'>{moment().format('MMMM Do YYYY, h:mm a')}
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{details.weather[0].description}</h5>

            <div className = 'temp-card'>
              <div className = 'temp-card-child'>
                <b>Temperature</b>: {details.main.temp} ℃
                </div>
                <div className = 'temp-card-child'>
                <b>Humidity</b>: {details.main.humidity}%
              </div>
            </div>

            <div className = 'temp-card'>
              <div className = 'temp-card-child'>
              <b>Sunrise</b>: {new Date(details.sys.sunrise *1000).toLocaleTimeString()}
                </div>
                <div className = 'temp-card-child'>
                <b>Sunset</b>: {new Date(details.sys.sunset *1000).toLocaleTimeString()}
              </div>
            </div>
            
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
  )}