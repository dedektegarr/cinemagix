import Carousel from "react-multi-carousel";
import BannerCarouselItem from "./BannerCarouselItem";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
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

const BannerCarousel = ({ title, dates, items }) => {
  return (
    <Carousel
      removeArrowOnDeviceType={["mobile", "tablet"]}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      responsive={responsive}
    >
      {items.map((item) => (
        <BannerCarouselItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
