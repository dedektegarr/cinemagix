import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../UI/Button/Button";

const BannerCarouselItem = () => {
  return (
    <div className="relative bg-color-primary bg-[url('https://image.tmdb.org/t/p/original/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg')] overflow-hidden bg-cover bg-center p-8 rounded-xl">
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-color-dark-1 to-color-dark-1/0"></div>
      <div className="flex items-center gap-6 relative">
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/A7EByudX0eOzlkQ2FIbogzyazm2.jpg`}
          alt="Movie poster"
          className="rounded-md h-[250px] w-auto"
          effect="blur"
        />
        <div className="">
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
            <p className="translate-y-[2px] font-medium">7.4</p>
          </div>
          <p className="text-sm my-2">Released: Jan 10, 2024</p>
          <h2 className="text-3xl font-bold mb-3">Beekeeper</h2>
          <p className="max-w-[600px] mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quas
            adipisci ut architecto officia temporibus cumque quibusdam eos illo
            incidunt laboriosam id sint laborum, aliquam at. Distinctio a
            accusamus iure?
          </p>

          <Button className="bg-color-primary rounded-md">Hello</Button>
        </div>
      </div>
    </div>
  );
};

export default BannerCarouselItem;
