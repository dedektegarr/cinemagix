import { useEffect, useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import HeroCarousel from "./HeroCarousel";
import { stagger, useAnimate, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = ({ data }) => {
  const sectionRef = useRef(null);
  const [displayedItem, setDisplayedItem] = useState(data.results[0]);
  const [scope, animate] = useAnimate();

  const handleUpdateContet = () => {
    sectionRef.current.style.background = `url('https://image.tmdb.org/t/p/original${displayedItem.backdrop_path}')`;
    sectionRef.current.style.backgroundPosition = "top";
    sectionRef.current.style.backgroundSize = "cover";
  };

  useEffect(() => {
    animate("li", { x: 0, opacity: 1 }, { delay: stagger(0.05) });

    handleUpdateContet();
  }, [displayedItem]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-indigo-700 flex items-center"
    >
      <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-color-dark-2 to-color-dark-2/40"></div>
      <div className="relative container grid  grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[340px]">
        <div>
          <ul ref={scope}>
            <motion.li initial={{ x: -50, opacity: 0 }}>
              <span className="inline-block py-1 px-3 rounded-md text-sm bg-color-primary italic font-medium 2xl:text-lg">
                Upcoming
              </span>
            </motion.li>
            <motion.li initial={{ x: -50, opacity: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold my-5 2xl:text-6xl">
                {displayedItem.title}
              </h1>
            </motion.li>
            <motion.li initial={{ x: -50, opacity: 0 }}>
              <p className="leading-relaxed line-clamp-3 2xl:text-xl">
                {displayedItem.overview}
              </p>
            </motion.li>
            <motion.li initial={{ x: -50, opacity: 0 }}>
              <Link
                to={`movie/${displayedItem.id}`}
                className="bg-indigo-600 hover:bg-indigo-700 rounded-full py-3 inline-block px-6 text-sm mt-4 mb-8 2xl:text-xl"
              >
                View More
              </Link>
            </motion.li>
          </ul>
        </div>

        <div className="self-end">
          <div className="max-w-full xl:max-w-[500px] 2xl:max-w-[600px] ml-auto">
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
