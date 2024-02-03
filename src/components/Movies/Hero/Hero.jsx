import { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import HeroCarousel from "./HeroCarousel";

const Hero = ({ data }) => {
  const sectionRef = useRef(null);
  const [displayedItem, setDisplayedItem] = useState(data.results[0]);

  const handleUpdateContet = () => {
    sectionRef.current.style.background = `url('https://image.tmdb.org/t/p/original${displayedItem.backdrop_path}')`;
    sectionRef.current.style.backgroundPosition = "top";
    sectionRef.current.style.backgroundSize = "cover";
  };

  useEffect(() => {
    handleUpdateContet();
  }, [displayedItem]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-indigo-700 flex items-center"
    >
      <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-color-dark-2 to-color-dark-2/50"></div>
      <div className="relative container grid grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block py-1 px-3 rounded-md text-sm bg-color-primary italic font-medium">
            Upcoming
          </span>
          <h1 className="text-4xl font-bold mt-3 mb-5">
            {displayedItem.title}
          </h1>
          <p className="leading-relaxed line-clamp-3">
            {displayedItem.overview}
          </p>
          <Button className="bg-indigo-700 rounded-full px-8 mt-4 mb-8">
            Hello
          </Button>
          <p className="text-color-dark-3">
            Lorem ipsum dolor sit amet consectetu
          </p>
        </div>

        <div className="self-end">
          <div className="max-w-[500px] ml-auto">
            <HeroCarousel
              items={data.results}
              activeItem={displayedItem}
              onSelect={setDisplayedItem}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
