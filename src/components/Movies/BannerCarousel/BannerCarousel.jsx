import Carousel from "react-multi-carousel";
import BannerCarouselItem from "./BannerCarouselItem";
import { formatDate } from "../../../utils/format-date";

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
    <section>
      <div className="flex items-center justify-between gap-5 py-6">
        {title && <h2 className="text-2xl font-bold">{title}</h2>}

        <p className="text-sm md:text-base text-color-primary">
          ( <span>{formatDate(dates.minimum)}</span> -{" "}
          <span>{formatDate(dates.maximum)}</span> )
        </p>
      </div>

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
    </section>
  );
};

export default BannerCarousel;
