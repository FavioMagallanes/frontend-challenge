import { useState, useEffect } from "react";
import { getCurrentCity } from "../API";
import { getNextDaysWeather } from "../API";

//useLocation hook
export const useLocation = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [currentDataCity, setCurrentDataCity] = useState({});
  const [weatherNextDays, setWeatherNextDays] = useState({});
  const [city, setCity] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      setLatitude(latitude);
      setLongitude(longitude);
      getCurrentCity(latitude, longitude)
        .then((res) => res.json())
        .then((data) => {
          setCurrentDataCity(data);
        });
    });
  }, [latitude, longitude]);

  useEffect(() => {
    getNextDaysWeather(latitude, longitude)
      .then((res) => res.json())
      .then((data) => {
        setWeatherNextDays(data);
      });
  }, [latitude, longitude]);

  return {
    longitude,
    latitude,
    currentDataCity,
    weatherNextDays,
  };
};
