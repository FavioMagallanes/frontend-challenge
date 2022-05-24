import { Listbox } from "@headlessui/react";
import React from "react";
import { calvinToCentigradeTemp, getDate, speedToKmh } from "../utils";
import { SelectCity } from "./SelectCity";

export const WeatherCity = ({ data }) => {
  return (
    <>
      <div className="container px-6 mx-auto mb-52">
        <SelectCity />
      </div>
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center">
          <div>
            <h1 className="font-extrabold tracking-tighter text-white text-8xl">
              Weather in {data.name}
            </h1>
          </div>
        </div>

        <div className="p-16 mt-16 shadow-2xl rounded-3xl drop-shadow-2xlg bg-gradient-to-r from-violet-600 to-transparent">
          <div className="flex flex-row items-center justify-around ">
            <div>
              <h3 className="font-mono text-5xl text-slate-200">
                Temp min:
                <span className="text-violet-400">
                  {" "}
                  {calvinToCentigradeTemp(data.main.temp_min)}
                  <sup>&deg;C</sup>
                </span>
              </h3>
              <h3 className="font-mono text-5xl text-slate-200">
                Temp max:
                <span className="text-violet-400">
                  {" "}
                  {calvinToCentigradeTemp(data.main.temp_max)}
                  <sup>&deg;C</sup>
                </span>
              </h3>
            </div>
            <div>
              <h3 className="font-mono text-5xl text-slate-200">
                Humidity:
                <span className="text-violet-400"> {data.main.humidity}%</span>
              </h3>
              <h3 className="font-mono text-5xl text-slate-200">
                Wind speed:
                <span className="text-violet-400">
                  {" "}
                  {speedToKmh(data.wind.speed)}Km
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
