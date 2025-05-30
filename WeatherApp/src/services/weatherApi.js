// src/services/weatherAPI.js
import axios from "axios";

const fetchWeatherData = async (city, coords = null) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  if (!apiKey) {
    console.error("❌ Missing API key. Make sure it's defined in .env");
    throw new Error("Missing API key");
  }

  try {
    let currentWeatherUrl, forecastUrl;

    if (coords) {
      // Use coordinates if provided
      currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${apiKey}`;
      forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${apiKey}`;
    } else if (city && typeof city === "string") {
      // Use city name if provided
      currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${apiKey}`;
      forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${apiKey}`;
    } else {
      throw new Error(
        "Invalid input. Provide either city name or coordinates."
      );
    }

    const [currentResponse, forecastResponse] = await Promise.all([
      axios.get(currentWeatherUrl),
      axios.get(forecastUrl),
    ]);

    if (currentResponse.status === 200 && forecastResponse.status === 200) {
      const currentData = currentResponse.data;
      const forecastData = forecastResponse.data;

      // Process 5-day forecast (group by day)
      const dailyForecasts = {};
      forecastData.list.forEach((item) => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString("en-US", { weekday: "short" });

        if (!dailyForecasts[day]) {
          dailyForecasts[day] = {
            day,
            temp: item.main.temp,
            minTemp: item.main.temp_min,
            maxTemp: item.main.temp_max,
            description: item.weather[0].description,
            icon: item.weather[0].icon,
            humidity: item.main.humidity,
            windSpeed: item.wind.speed,
            clouds: item.clouds.all,
            rain: item.rain?.["3h"] || 0,
            date: date,
          };
        } else {
          // Update min/max temperatures
          dailyForecasts[day].minTemp = Math.min(
            dailyForecasts[day].minTemp,
            item.main.temp_min
          );
          dailyForecasts[day].maxTemp = Math.max(
            dailyForecasts[day].maxTemp,
            item.main.temp_max
          );
        }
      });

      return {
        current: {
          name: currentData.name,
          temp: currentData.main.temp,
          feelsLike: currentData.main.feels_like,
          description: currentData.weather[0].description,
          humidity: currentData.main.humidity,
          windSpeed: currentData.wind.speed,
          windDeg: currentData.wind.deg,
          pressure: currentData.main.pressure,
          visibility: currentData.visibility / 1000, // Convert to km
          sunrise: new Date(currentData.sys.sunrise * 1000),
          sunset: new Date(currentData.sys.sunset * 1000),
          icon: currentData.weather[0].icon,
          country: currentData.sys.country,
          clouds: currentData.clouds.all,
          rain: currentData.rain?.["1h"] || 0,
        },
        forecast: Object.values(dailyForecasts).slice(0, 5), // Get next 5 days
      };
    } else {
      throw new Error("Unexpected API response");
    }
  } catch (error) {
    console.error("Weather API error:", error);
    if (error.response?.status === 404) {
      throw new Error("City not found");
    } else if (error.response?.status === 401) {
      throw new Error("Invalid API key and services");
    } else {
      throw error;
    }
  }
};

export { fetchWeatherData };
