import { calvinToCentigradeTemp, getDate } from "../utils";

export const NextDaysWeather = (weatherNextDays) => {
  const icon = `https://openweathermap.org/img/wn/${weatherNextDays.data.list[0].weather[0].icon}@2x.png`;

  return (
    <>
      <h2 className="mt-10 text-2xl font-semibold text-white">
        Next days weather in {weatherNextDays.data.city.name}
      </h2>
      <div className="flex flex-row mt-10 text-center">
        {weatherNextDays.data.list.slice(0, 5).map((item) => {
          return (
            <figure
              key={crypto.randomUUID}
              className="flex flex-col justify-between px-3 ml-3 shadow-2xl drop-shadow-2xlg rounded-xl bg-violet-200"
            >
              <div className="flex flex-row items-center justify-around w-full mt-3">
                <div>
                  <img
                    className="inset-0 object-fill w-10 h-10 hover:rotate-12"
                    src={icon}
                    alt="weather icon"
                  />
                </div>
                <div>
                  <small className="font-sans text-lg font-semibold text-violet-900">
                    {item.weather[0].description}
                  </small>
                </div>
              </div>
              <div className="flex flex-col p-6 text-left text-violet-600">
                <p className="mb-2 text-2xl font-bold">
                  {getDate(item.dt_txt)}
                </p>
                <p className="font-mono font-bold ">
                  min:{" "}
                  <span className="text-violet-900">
                    {calvinToCentigradeTemp(item.main.temp_min)}
                    <sup>&deg;C</sup>
                  </span>
                </p>
                <p className="font-mono font-bold">
                  max:{" "}
                  <span className="text-violet-900">
                    {calvinToCentigradeTemp(item.main.temp_max)}
                    <sup>&deg;C</sup>
                  </span>
                </p>
              </div>
            </figure>
          );
        })}
      </div>
    </>
  );
};
