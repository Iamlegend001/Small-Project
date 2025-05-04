// src/App.js
import { useState, useEffect } from "react";
import { fetchWeatherData } from "./services/weatherApi";
import CitySearch from "./components/CitySearch";

import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";

import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [locationError, setLocationError] = useState(null);

  const getWeatherByLocation = async (coords) => {
    try {
      setIsLoading(true);
      const data = await fetchWeatherData(null, {
        latitude: coords.lat,
        longitude: coords.lon,
      });
      if (data) {
        setWeatherData(data);
        setLocationError(null);
      } else {
        throw new Error("No data received");
      }
    } catch (err) {
      console.error("Error fetching weather:", err);
      setLocationError("Failed to fetch weather data for your location");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (city) => {
    try {
      setIsLoading(true);
      const data = await fetchWeatherData(city);
      if (data) {
        setWeatherData(data);
        setLocationError(null);
      } else {
        throw new Error("No data received");
      }
    } catch (err) {
      console.error("Error searching city:", err);
      setLocationError("Failed to fetch weather data for the specified city");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getWeatherByLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          console.error("Error getting location:", err);
          setLocationError(
            "Please enable location access to get weather for your current location"
          );
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser");
    }
  }, []);

  // Function to determine background gradient based on weather
  const getWeatherBg = () => {
    const main =
      weatherData?.current?.weatherMain ||
      weatherData?.current?.description ||
      "";
    if (/clear|sunny/i.test(main)) {
      return "bg-gradient-to-br from-yellow-100 via-yellow-200 to-orange-200";
    }
    if (/rain|drizzle|thunderstorm/i.test(main)) {
      return "bg-gradient-to-br from-blue-200 via-blue-400 to-gray-400";
    }
    if (/cloud/i.test(main)) {
      return "bg-gradient-to-br from-slate-200 via-gray-300 to-gray-400";
    }
    if (/snow/i.test(main)) {
      return "bg-gradient-to-br from-blue-100 via-white to-blue-200";
    }
    return "bg-gradient-to-br from-pink-100 via-sky-100 to-emerald-100";
  };

  return (
    <ThemeProvider>
      <div
        className={`min-h-screen ${getWeatherBg()} dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Left Side - Fixed */}
            <div className="lg:col-span-1 space-y-4 lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]">
              <div className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-slate-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                    Weather App
                  </h1>
                  <ThemeToggle />
                </div>
                <p className="text-sm text-slate-600 dark:text-gray-300 mb-4">
                  Get real-time weather updates for any location
                </p>
                <CitySearch onSearch={handleSearch} />
              </div>

              {locationError && (
                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-600 dark:text-red-300 text-sm">
                  {locationError}
                </div>
              )}
            </div>

            {/* Right Side - Scrollable */}
            <div className="lg:col-span-3 space-y-4">
              {isLoading ? (
                <div className="flex items-center justify-center h-[40vh]">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="rounded-2xl bg-gradient-to-br from-white via-blue-50 to-emerald-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-2xl p-4 md:p-8">
                  {/* Show current weather info if available */}
                  {weatherData?.current && (
                    <WeatherCard weatherData={weatherData} />
                  )}
                  {weatherData?.forecast && (
                    <ForecastCard forecast={weatherData.forecast} />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
