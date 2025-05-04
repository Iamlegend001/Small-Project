// src/components/WeatherCard.js
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Droplets,
  Wind,
  Thermometer,
  Sunrise,
  Sunset,
  Eye,
  Gauge,
  Cloud,
  Compass,
  Umbrella,
} from "lucide-react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData?.current) return null;

  const { current } = weatherData;
  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getWindDirection = (degrees) => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  };

  const getWeatherGradient = (temp) => {
    if (temp > 30) return "from-orange-100 via-amber-100 to-yellow-100";
    if (temp > 20) return "from-amber-100 via-yellow-100 to-lime-100";
    if (temp > 10) return "from-sky-100 via-blue-100 to-indigo-100";
    return "from-blue-100 via-indigo-100 to-violet-100";
  };

  return (
    <Card
      className={`w-full bg-gradient-to-br ${getWeatherGradient(
        current.temp
      )} dark:from-gray-800 dark:to-gray-700 shadow-xl border border-slate-200 dark:border-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-300">
              {current.name}, {current.country}
            </CardTitle>
            <p className="text-lg text-slate-600 dark:text-gray-300 capitalize mt-1 transition-colors duration-300 hover:text-emerald-600 dark:hover:text-emerald-300">
              {current.description}
            </p>
          </div>
          {current.icon && (
            <img
              src={`http://openweathermap.org/img/wn/${current.icon}@4x.png`}
              alt="Weather icon"
              className="w-24 h-24 transition-transform duration-300 hover:scale-110"
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-6xl font-bold text-slate-800 dark:text-white transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-300">
              {Math.round(current.temp)}°C
            </div>
            <div className="text-lg text-slate-600 dark:text-gray-300 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-300">
              Feels like {Math.round(current.feelsLike)}°C
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-slate-200 dark:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-blue-100/70 dark:hover:bg-blue-900/30 hover:shadow-lg">
              <Thermometer className="h-5 w-5 text-red-500 dark:text-red-400 transition-transform duration-300 hover:scale-125" />
              <div>
                <p className="text-xs text-slate-600 dark:text-gray-300">
                  Temp
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">
                  {Math.round(current.temp)}°C
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-slate-200 dark:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-blue-100/70 dark:hover:bg-blue-900/30 hover:shadow-lg">
              <Droplets className="h-5 w-5 text-blue-500 dark:text-blue-400 transition-transform duration-300 hover:scale-125" />
              <div>
                <p className="text-xs text-slate-600 dark:text-gray-300">
                  Humidity
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">
                  {current.humidity}%
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-slate-200 dark:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-blue-100/70 dark:hover:bg-blue-900/30 hover:shadow-lg">
              <Wind className="h-5 w-5 text-cyan-500 dark:text-cyan-400 transition-transform duration-300 hover:scale-125" />
              <div>
                <p className="text-xs text-slate-600 dark:text-gray-300">
                  Wind
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">
                  {current.windSpeed} m/s
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-slate-200 dark:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-blue-100/70 dark:hover:bg-blue-900/30 hover:shadow-lg">
              <Compass className="h-5 w-5 text-indigo-500 dark:text-indigo-400 transition-transform duration-300 hover:scale-125" />
              <div>
                <p className="text-xs text-slate-600 dark:text-gray-300">
                  Direction
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">
                  {getWindDirection(current.windDeg)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-slate-200 dark:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-blue-100/70 dark:hover:bg-blue-900/30 hover:shadow-lg">
              <Gauge className="h-5 w-5 text-purple-500 dark:text-purple-400 transition-transform duration-300 hover:scale-125" />
              <div>
                <p className="text-xs text-slate-600 dark:text-gray-300">
                  Pressure
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">
                  {current.pressure} hPa
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-slate-200 dark:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-blue-100/70 dark:hover:bg-blue-900/30 hover:shadow-lg">
              <Eye className="h-5 w-5 text-emerald-500 dark:text-emerald-400 transition-transform duration-300 hover:scale-125" />
              <div>
                <p className="text-xs text-slate-600 dark:text-gray-300">
                  Visibility
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">
                  {current.visibility} km
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-slate-200 dark:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-blue-100/70 dark:hover:bg-blue-900/30 hover:shadow-lg">
              <Cloud className="h-5 w-5 text-sky-500 dark:text-sky-400 transition-transform duration-300 hover:scale-125" />
              <div>
                <p className="text-xs text-slate-600 dark:text-gray-300">
                  Clouds
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">
                  {current.clouds}%
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-slate-200 dark:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-blue-100/70 dark:hover:bg-blue-900/30 hover:shadow-lg">
              <Umbrella className="h-5 w-5 text-violet-500 dark:text-violet-400 transition-transform duration-300 hover:scale-125" />
              <div>
                <p className="text-xs text-slate-600 dark:text-gray-300">
                  Rain (1h)
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">
                  {current.rain?.["1h"] || 0} mm
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="flex items-center justify-center space-x-2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-slate-200 dark:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-blue-100/70 dark:hover:bg-blue-900/30 hover:shadow-lg">
            <Sunrise className="h-5 w-5 text-amber-500 dark:text-amber-400 transition-transform duration-300 hover:scale-125" />
            <div>
              <p className="text-xs text-slate-600 dark:text-gray-300">
                Sunrise
              </p>
              <p className="font-semibold text-slate-800 dark:text-white">
                {formatTime(current.sunrise)}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 p-2 bg-white/50 dark:bg-gray-700/50 rounded-lg border border-slate-200 dark:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-blue-100/70 dark:hover:bg-blue-900/30 hover:shadow-lg">
            <Sunset className="h-5 w-5 text-orange-500 dark:text-orange-400 transition-transform duration-300 hover:scale-125" />
            <div>
              <p className="text-xs text-slate-600 dark:text-gray-300">
                Sunset
              </p>
              <p className="font-semibold text-slate-800 dark:text-white">
                {formatTime(current.sunset)}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
