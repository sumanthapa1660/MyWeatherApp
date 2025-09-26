import React from 'react'

const WeatherCards = ({ weather }) => {
    return (
        <div className='mt-5'>
            <h2 className='text-2xl font-semibold text-center p-2'>
                {weather.name}, {weather.sys.country}
            </h2>

            <div className='flex justify-center items-center mt-8'>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                    className='w-18 h-18'
                />

                <p className='text-3xl font-bold'>
                    {Math.round(weather.main.temp)}°C
                </p>
            </div>

            <p className='text-center text-gray-400 capitalize'>
                {weather.weather[0].description}
            </p>

            <div className='grid grid-cols-2 gap-4 mt-5'>
                <div className='text-center'>
                    <p className='text-gray-300'>Humidity</p>
                    <p className='font-bold text-sm'>
                        {weather.main.humidity}%
                    </p>
                </div>

                <div className='text-center'>
                    <p className='text-gray-300'>Wind</p>
                    <p className='font-bold text-sm'>
                        {weather.wind.speed} m/s
                    </p>
                </div>

                <div className='text-center'>
                    <p className='text-gray-300'>Pressure</p>
                    <p className='font-bold text-sm'>
                        {weather.main.pressure} hPa
                    </p>
                </div>

                <div className='text-center'>
                    <p className='text-gray-300'>Feels like</p>
                    <p className='font-bold text-sm'>
                        {Math.round(weather.main.feels_like)}°C
                    </p>
                </div>

            </div>
        </div>
    )
}

export default WeatherCards