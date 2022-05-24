import { useState, useEffect } from "react";
import { useLocation } from "./hook/useLocation";
import { WeatherCity } from "./components/WeatherCity";
import { NextDaysWeather } from "./components/NextDaysWeather";
import { SelectCity } from "./components/SelectCity";

import BeatLoader from "react-spinners/BeatLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  const { latitude, longitude, currentDataCity, weatherNextDays } =
    useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (
    Object.values(currentDataCity).length === 0 ||
    Object.values(weatherNextDays).length === 0
  ) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-violet-900">
      {loading ? (
        <BeatLoader
          sizeUnit={"px"}
          size={25}
          color={"#fff"}
          loading={loading}
        />
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
};

export default App;
