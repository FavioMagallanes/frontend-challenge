import React from "react";

export const WeatherCity = (currentDataCity) => {
  return (
    <div className="flex bg-violet-900 h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-8xl font-extrabold tracking-tighter">
            Weather in {currentDataCity.data.name}
          </h1>
          <div className="mt-8">
            <h2 className="text-white text-6xl font-bold">
              {currentDataCity.data.weather[0].description}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
