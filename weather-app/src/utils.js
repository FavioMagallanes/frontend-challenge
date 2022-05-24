export const API_KEY_OPEN_WEATHER = "6ef7dbca756de6bb3c229642f0a8590f";

export const calvinToCentigradeTemp = (temp) => {
  return Math.round((temp - 273.15) * 10) / 10;
};

export const speedToKmh = (speed) => {
  return Math.round(speed * 3.6);
};

export const getDate = (date) => {
  let options = { timeZone: "UTC", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-ES", options);
};
