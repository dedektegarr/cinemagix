import Carousel from "react-multi-carousel";
import BannerCarouselItem from "./BannerCarouselItem";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BannerCarousel = () => {
  return (
    <section>
      <div className="flex items-center justify-between gap-5 py-5">
        <h2 className="text-2xl font-bold">Now Playing</h2>
        <p className="text-md text-color-primary">
          ( <span>20 Jan, 2024</span> - <span>30 Mar, 2024</span> )
        </p>
      </div>

      <Carousel autoPlay={false} responsive={responsive}>
        <BannerCarouselItem />
        <BannerCarouselItem />
        <BannerCarouselItem />
        <BannerCarouselItem />
      </Carousel>
    </section>
  );
};

export default BannerCarousel;
