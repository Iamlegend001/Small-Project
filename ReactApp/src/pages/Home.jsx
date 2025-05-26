import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import { GoRocket } from "react-icons/go";
import { Button } from "@/components/ui/button";
import Scroller1 from "./Scroller/Scroller1";
import Grid1 from "./Scroller/grid1";

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <img
          src="/Picture/Image1.jpg"
          alt="Scrambler 400"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/4 left-10 text-white z-10">
          <h1 className="text-6xl font-semibold mb-4">
            NEW SCRAMBLER <span className="text-red-800">400 </span> <br /> SC
          </h1>
          <p className="text-xl mb-8 text-gray-300 line">
            Experience Rugged Triumph Scrambler attitude and ability
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-3 bg-red-700 text-white text-lg font-medium hover:bg-red-800 transition-colors">
              VIEW BIKE
            </button>
            <button className="px-8 py-3 bg-black text-white text-lg font-medium hover:bg-gray-800 transition-colors">
              TEST RIDE
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-20 py-3 bg-[#2A2A2A]">
        <div className="flex items-center gap-3 hover:bg-gray-700 px-6 py-3 rounded-md transition-colors cursor-pointer">
          <FiMap className="text-2xl text-[#d3bebe]" />
          <h1 className="text-[#FFFFF2] text-lg font-medium">ENQUIRE NOW</h1>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-700 px-6 py-3 rounded-md transition-colors cursor-pointer">
          <GoRocket className="text-2xl text-[#d3bebe]" />
          <h1 className="text-[#FFFFF2] text-lg font-medium">BOOK NOW</h1>
        </div>
        <div className="flex items-center gap-3 hover:bg-gray-700 px-6 py-3 rounded-md transition-colors cursor-pointer">
          <FaWhatsapp className="text-2xl text-[#d3bebe]" />
          <h1 className="text-[#FFFFF2] text-lg font-medium">
            CONNECT ON WHATSAPP
          </h1>
        </div>
      </div>
      <div className="px-10 py-16 flex flex-col justify-center items-center bg-white">
        <h1 className="text-5xl font-medium tracking-tight mb-4">
          WELCOME TO TRIUMPH
        </h1>
        <p className="text-2xl font-medium tracking-tight text-gray-600 mb-16">
          WHERE WOULD YOU LIKE TO START
        </p>

        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="group relative overflow-hidden">
              <img
                src="https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/central%20marketing%20team/homepage%20-%202023%20-%20sm/home-triumph-tiger-sport-660_my24_500x325.jpg"
                alt="Tiger Sport 660"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-medium">TIGER SPORT 660</h3>
                  <p className="text-sm mt-1">Explore Adventure</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                The Triumph Of Your Dreams, Closer than Ever
              </h2>
              <p className="text-gray-600 hover:text-red-700 transition-colors cursor-pointer font-medium">
                Explore Models →
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="group relative overflow-hidden">
              <img
                src="https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/central%20marketing%20team/homepage%20-%202023%20-%20sm/home-street-triple-rs_my23_16031_500x325.jpg"
                alt="Street Triple RS"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-medium">STREET TRIPLE RS</h3>
                  <p className="text-sm mt-1">Pure Performance</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                The Triumph Of Your Dreams, Closer than Ever
              </h2>
              <p className="text-gray-600 hover:text-red-700 transition-colors cursor-pointer font-medium">
                Explore Models →
              </p>
            </div>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="group relative overflow-hidden">
              <img
                src="https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/central%20marketing%20team/homepage%20-%202023%20-%20sm/home-speedtwin_1200_rider_500x325.jpg"
                alt="Speed Twin"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-medium">SPEED TWIN</h3>
                  <p className="text-sm mt-1">Modern Classic</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                The Triumph Of Your Dreams, Closer than Ever
              </h2>
              <p className="text-gray-600 hover:text-red-700 transition-colors cursor-pointer font-medium">
                Explore Models →
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[600px] mt-20">
        <img
          src="https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/home/hompage%20images/full%20width%20cta/homepage-fwcta-alt-1920x768.jpg"
          alt="Configure your ride"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-semibold mb-6 uppercase">
            Configure Your Perfect Ride
          </h1>
          <Button
            className="px-20 bg-[#000000] text-white hover:bg-white hover:text-black transition duration-300"
            variant="secondary"
          >
            CONFIGURE NOW
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-screen bg-white py-20 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-16">
          Discover More
        </h1>
        <Scroller1 />
      </div>
      <div className="flex p-20 bg-gray-50">
        <div className="flex flex-col items-start justify-center p-10 gap-6 w-1/2">
          <h1 className="text-4xl font-semibold tracking-wide text-gray-800">
            TRIUMPH CLOTHING
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our clothing collection is designed by riders, for riders. You get
            authentic, individual style - built for the ride... and beyond.
          </p>
          <div className="flex gap-4 mt-4">
            <Button className="px-8 py-6 bg-red-700 text-white text-lg font-medium hover:bg-red-800 transition-colors">
              Explore
            </Button>
            <Button className="px-8 py-6 bg-black text-white text-lg font-medium hover:bg-gray-800 transition-colors">
              Explore Clothing Shop
            </Button>
          </div>
        </div>
        <div className="w-1/2 relative overflow-hidden group">
          <img
            src="https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/e-com/ss25/dgr%20clothing%20collection%20-%20shop%20home.png"
            alt="Triumph Clothing Collection"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div>
        <h1>

        </h1>
        <Grid1/>
      </div>

    </div>
  );
};

export default Home;
