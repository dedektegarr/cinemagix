import Button from "../../UI/Button/Button";
import { formatDate } from "../../../utils/format-date";
import { limitText } from "../../../utils/limit";
import { useEffect, useRef } from "react";

const BannerCarouselItem = ({ item }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.style.background = `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`;
    containerRef.current.style.backgroundPosition = "top";
    containerRef.current.style.backgroundSize = "cover";
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative h-auto bg-color-primary overflow-hidden p-8 rounded-xl shadow-lg`}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-color-dark-1 to-color-dark-1/40"></div>
      <div className="flex flex-col md:flex-row items-center gap-6 relative">
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
          alt="Movie poster"
          className="hidden md:block rounded-md h-[200px] md:h-[280px] w-auto shadow-lg"
          effect="blur"
        />
        <div className="max-w-[600px]">
          <div className="flex items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 -960 960 960"
                width="26"
                fill="#F8E559"
              >
                <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
              </svg>
            </span>
            <p className="translate-y-[2px] font-medium">
              {item.vote_average.toFixed(1)}
            </p>
          </div>
          <p className="text-xs my-3 bg-black/40 py-2 px-3 inline-block rounded-md">
            Released:{" "}
            <span className="italic">{formatDate(item.release_date)}</span>
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h2>
          <p className="mb-4 line-clamp-2 md:line-clamp-3 leading-relaxed">
            {item.overview}
          </p>

          <Button className="bg-color-primary hover:bg-color-primary-1 text-sm rounded-md">
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerCarouselItem;
