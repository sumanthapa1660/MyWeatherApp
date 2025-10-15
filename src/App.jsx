import { useState } from "react"
import axios from 'axios';
import SearchBarr from "./Components/SearchBarr";
import WeatherCards from "./Components/WeatherCards";
import Cvideo from './CloudVideo.mp4';


function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const VideoRef = useRef(null);
  // useEffect(() => {
  //   if (VideoRef.current) {
  //     VideoRef.current.playbackRate = 0.9;
  //   }
  // });

  const API_KEY = import.meta.env.VITE_WEATHER_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('city not found. Please try again!')
      } else {
        setError('An error occurred. Please try again later!')
      }

      setWeather(null);
    } finally {
      setLoading(false);
    }

  };


  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-blue-100 relative overflow-hidden'>
      <video autoPlay loop muted playsInline preload="auto" className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={Cvideo} type="video/mp4" />
      </video>

      <div className='bg-black/30 text-white rounded-lg shadow-xl/40 shadow-[#ffffff] p-8 max-w-md w-full z-10'>
        <h className='text-3xl font-bold flex justify-center mb-8' >
          Weather App
        </h>
        <SearchBarr fetchWeather={fetchWeather} />
        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        {weather && <WeatherCards weather={weather} />}
      </div>

    </div>
  )
}

export default App
