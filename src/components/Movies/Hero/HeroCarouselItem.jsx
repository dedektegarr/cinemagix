const HeroCarouselItem = ({ item, activeItem, onSelect }) => {
  return (
    <div
      className={`relative shadow-md rounded-lg mx-2 overflow-hidden transition-all duration-300 bg-color-primary scale-100 cursor-pointer ${
        activeItem.id === item.id ? "-translate-y-4" : ""
      }`}
      onClick={() => onSelect(item)}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-color-primary opacity-0 hover:opacity-20 transition-all duration-200"></div>
      <img
        className="h-[180px] object-cover w-full"
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
        alt="Poster"
      />
    </div>
  );
};

export default HeroCarouselItem;
