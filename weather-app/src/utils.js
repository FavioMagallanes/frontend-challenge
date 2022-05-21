export const API_KEY_OPEN_WEATHER = "e04ac6abbddce262e34b619afd58617e";

export const calvinToCentigradeTemp = (temp) => {
  return Math.round((temp - 273.15) * 10) / 10;
};

export const speedToKmh = (speed) => {
  return Math.round(speed * 3.6);
};

export const getDate = (date) => {
  let options = { month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-ES", options);
};
