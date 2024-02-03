import Carousel from "react-multi-carousel";
import HeroCarouselItem from "./HeroCarouselItem";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 3,
  },
};

const HeroCarousel = ({ items, onSelect, activeItem }) => {
  return (
    <Carousel
      showDots={true}
      // removeArrowOnDeviceType={["mobile"]}
      responsive={responsive}
      className="overflow-hidden pt-5 pb-10 -mb-10"
    >
      {items.map((item) => (
        <HeroCarouselItem
          key={item.id}
          item={item}
          onSelect={onSelect}
          activeItem={activeItem}
        />
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
