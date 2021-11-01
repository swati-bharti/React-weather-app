import "./App.css"
import{useEffect, useState} from 'react'
import axios from 'axios'
import Forecast from './Components/Forecast'
import TempCard from './Components/TempCard'

// constant Url and apiKey
const baseUrl =  'https://api.openweathermap.org/data/2.5/weather?';
const apiKey =  '87eb04e63a1d2d86f382d92a06242e9c'

export default function App () {

  const [city, setCity] = useState('Sydney')
  const [isLoading, setisLoading] = useState(true)
  const [details, setDetails] = useState();

  //url to be fetched
  let fetchUrl = `${baseUrl}q=${city}&appid=${apiKey}&units=metric`

  // Function to fetch details
  const fetchDetails = async () => {
    const res = await axios.get(fetchUrl);
    setDetails(res.data)
    setisLoading(false)
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if(isLoading){
      return <div className="App">Loading...</div>
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchDetails();
}

  return (
    <div>
       <div className="main">
        <header className="d-flex justify-content-center align-items-center">
          <h2>React Weather App</h2>
        </header>
        <div className="container">
          <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
            <div class="col-auto">
              <label for="location-name" class="col-form-label">
                Enter Location 
              </label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="location-name"
                class="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            </div>
            </div>
            <button className="btn btn-primary mt-2" onClick={handleSubmit}>
              Search
            </button>
            </div>
       
      <TempCard 
      details = {details}
      />
      <Forecast
      latitude = {details.coord.lat}
      longitude = {details.coord.lon}
      />
        <footer className="footer">
        <code>
          Created by{' '}
          <a href="https://github.com/swati-bharti" target="none">
            swati-bharti
          </a>{' '}
          using React
        </code>
      </footer>
      
    </div>
  );
}


