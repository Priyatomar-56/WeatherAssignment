// // frontend/src/App.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchWeatherData = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
//       setWeatherData(response.data);
//       setError(null);
//     } catch (error) {
//       setError('Failed to fetch weather data. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchWeatherData();
//   };

//   return (
//     <div>
//       <h1>Weather Forecast</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={city} onChange={handleChange} placeholder="Enter city name" />
//         <button type="submit">Get Weather</button>
//       </form>
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {weatherData && (
//         <div>
//           <h2>Weather in {city}</h2>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Description: {weatherData.weather[0].description}</p>
//           <p>Humidity: {weatherData.main.humidity}%</p>
//           <p>Wind Speed: {weatherData.wind.speed} m/s</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS file for styling

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch weather data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather Forecast</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" value={city} onChange={handleChange} placeholder="Enter city name" className="input-field" />
        <button type="submit" className="submit-button">Get Weather</button>
      </form>
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2 className="city-name">Weather in {city}</h2>
          <p className="weather-detail">Temperature: {weatherData.main.temp}°C</p>
          <p className="weather-detail">Description: {weatherData.weather[0].description}</p>
          <p className="weather-detail">Humidity: {weatherData.main.humidity}%</p>
          <p className="weather-detail">Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default App;
