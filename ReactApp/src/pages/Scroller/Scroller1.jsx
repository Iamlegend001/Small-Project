import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const bikes = [
  {
    title: "NEW SPEED TWIN 900",
    description:
      "Effortlessly stylish and highly customisable, the Speed Twin 900 is designed for riders who seek both quality and performance.",
    image:
      "https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/home/new%20home%20page/my25-bikes-speed-twin-900-stepcarousel-1410x793.png",
  },
  {
    title: "SCRAMBLER 1200 X",
    description:
      "With off-road capability and distinctive style, the Scrambler 1200 X blends modern performance with adventure-ready attitude.",
    image:
      "https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/motorcycles/modern-classics/t%20series/scrambler%20400%20x/scrambler%20400%20x%20reasons%20to%20ride%20page/capability/scrambler-400-x-my24-r2r-capability-image-block-1410x793.jpg",
  },
  {
    title: "BONNEVILLE BOBBER",
    description:
      "Iconic custom style with modern performance. The Bonneville Bobber combines minimalist design with ride-enhancing technology.",
    image:
      "https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/motorcycles/modern-classics/my25/bajaj%20-%20india/speed%20400%20my25/triumph_my25_speed-400-1920x1080_04.jpg",
  },
];

const Scroller1 = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="flex h-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {bikes.map((bike, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row w-screen flex-shrink-0 h-full"
          >
            {/* Image */}
            <div className="flex-[1.5] flex items-center justify-center">
              <div className="w-full aspect-[16/9]">
                <img
                  src={bike.image}
                  alt={bike.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col justify-center px-8 py-6 bg-white/80 backdrop-blur-md">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {bike.title}
              </h1>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                {bike.description}
              </p>
              <Button variant="secondary" className="w-fit">
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroller1;
