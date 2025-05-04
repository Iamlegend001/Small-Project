import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Wind, Thermometer, Cloud, Umbrella } from "lucide-react";

const ForecastCard = ({ forecast }) => {
  if (!forecast || forecast.length === 0) return null;

  const getDayGradient = (temp) => {
    if (temp > 30) return "from-orange-50 via-amber-50 to-yellow-50";
    if (temp > 20) return "from-amber-50 via-yellow-50 to-lime-50";
    if (temp > 10) return "from-sky-50 via-blue-50 to-indigo-50";
    return "from-blue-50 via-indigo-50 to-violet-50";
  };

  return (
    <Card className="w-full mt-4 bg-gradient-to-br from-white to-sky-50 dark:from-gray-800 dark:to-gray-700 shadow-xl border border-slate-200 dark:border-gray-600">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-center text-slate-800 dark:text-white">
          5-Day Forecast
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {forecast.map((day, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-3 ${getDayGradient(
                day.temp
              )} dark:bg-gray-700/50 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-gray-600`}
            >
              <div className="text-base font-semibold text-slate-800 dark:text-white mb-1">
                {day.day}
              </div>
              <img
                src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt="Weather icon"
                className="w-16 h-16 mb-1"
              />
              <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">
                {Math.round(day.temp)}°C
              </div>
              <div className="text-xs text-slate-600 dark:text-gray-300 capitalize mb-2">
                {day.description}
              </div>
              <div className="w-full space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Thermometer className="h-3.5 w-3.5 text-red-500 dark:text-red-400" />
                    <span className="text-xs text-slate-600 dark:text-gray-300">
                      Range
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-white">
                    {Math.round(day.minTemp)}° / {Math.round(day.maxTemp)}°
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Droplets className="h-3.5 w-3.5 text-blue-500 dark:text-blue-400" />
                    <span className="text-xs text-slate-600 dark:text-gray-300">
                      Hum
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-white">
                    {day.humidity}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Wind className="h-3.5 w-3.5 text-cyan-500 dark:text-cyan-400" />
                    <span className="text-xs text-slate-600 dark:text-gray-300">
                      Wind
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-white">
                    {day.windSpeed} m/s
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Cloud className="h-3.5 w-3.5 text-sky-500 dark:text-sky-400" />
                    <span className="text-xs text-slate-600 dark:text-gray-300">
                      Clouds
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-white">
                    {day.clouds}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Umbrella className="h-3.5 w-3.5 text-violet-500 dark:text-violet-400" />
                    <span className="text-xs text-slate-600 dark:text-gray-300">
                      Rain
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-white">
                    {day.rain || 0} mm
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ForecastCard;

