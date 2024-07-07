import axios from "axios";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Weather from "./Weather";
import { FadeLoader } from "react-spinners";
import toast from "react-hot-toast";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;

  const fetchWeather = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.get(url);
      let data = response.data;

      if (data) {
        setWeather(data);
        setLoading(false);
        setCity("");
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Error fetching weather", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <form
        onSubmit={fetchWeather}
        className=" flex items-center gap-10 border-2 border-[#fff]  px-3 py-2 rounded-md"
      >
        <input
          type="search"
          placeholder="Search..."
          className="bg-transparent placeholder:text-white outline-none w-full"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="cursor-pointer">
          <IoSearchOutline size={25} />
        </button>
      </form>

      {loading ? (
        <FadeLoader color="#fff" className="w-[200px] m-auto block" />
      ) : (
        weather.main && <Weather data={weather} />
      )}
    </div>
  );
};

export default SearchBar;
