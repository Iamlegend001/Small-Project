import React from 'react';
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    title: "Read The Latest Triumph News",
    img: "https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/central%20marketing%20team/homepage%20-%202023%20-%20sm/home-speedtriplers_my24-770x770.jpg"
  },
  {
    title: "Explore Upcoming Events",
    img: "https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/central%20marketing%20team/homepage%20-%202023%20-%20sm/home-speedtriplers_my24-770x770.jpg"
  },
  {
    title: "New Bikes Launch 2025",
    img: "https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/central%20marketing%20team/homepage%20-%202023%20-%20sm/home-speedtriplers_my24-770x770.jpg"
  },
  {
    title: "Join Triumph Community",
    img: "https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/central%20marketing%20team/homepage%20-%202023%20-%20sm/home-speedtriplers_my24-770x770.jpg"
  },
];

const Grid1 = () => {
  return (
    <div className="grid grid-cols-2 gap-6  max-w-5xl mx-auto">
      {newsItems.map((item, index) => (
        <div
          key={index}
          className="bg-white  overflow-hidden shadow-lg aspect-square flex flex-col justify-between"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-2/3 object-cover"
          />
          <div className="p-4 flex flex-col items-center text-center">
            <h1 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h1>
            <Button variant="secondary">Latest News</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid1;
