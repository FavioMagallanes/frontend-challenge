import React from "react";
import { useLocation } from "././hook/useLocation";
import { NextDaysWeather } from "./components/NextDaysWeather";
import { WeatherCity } from "./components/WeatherCity";

function App() {
  const { loading, longitude, latitude, currentDataCity, weatherNextDays } =
    useLocation();

  if (
    Object.values(currentDataCity).length === 0 ||
    Object.values(weatherNextDays).length === 0
  ) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-violet-900">
      {loading ? (
        <h1 className="text-6xl font-extrabold text-white uppercase ">
          Loading...
        </h1>
      ) : (
        <>
          <WeatherCity data={currentDataCity} />
          <NextDaysWeather
            latitude={latitude}
            longitude={longitude}
            data={weatherNextDays}
          />
        </>
      )}
    </div>
  );
}

export default App;
