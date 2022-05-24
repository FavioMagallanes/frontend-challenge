import { API_KEY_OPEN_WEATHER } from "../utils";

export const getCurrentCity = (latitude, longitude) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY_OPEN_WEATHER}`
  );
};

export const getNextDaysWeather = (latitude, longitude) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY_OPEN_WEATHER}`
  );
};

export const getCity = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_OPEN_WEATHER}`
  );
};
