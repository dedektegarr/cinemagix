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
    items: 4,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
    slidesToSlide: 2,
  },
};

const HeroCarousel = ({ items, onSelect, activeItem }) => {
  return (
    <Carousel responsive={responsive} className="overflow-hidden py-4">
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
