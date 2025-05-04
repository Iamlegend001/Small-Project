// src/components/CitySearch.js
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const CitySearch = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-md mx-auto">
      <div className="relative w-full">
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter city name..."
          className="w-full pl-10 pr-4 py-6 text-lg bg-white dark:bg-gray-700 border-slate-300 dark:border-gray-600 text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 dark:text-gray-500" />
      </div>
      <Button
        onClick={handleSearch}
        className="w-full py-6 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
      >
        Get Weather
      </Button>
    </div>
  );
};

export default CitySearch;

