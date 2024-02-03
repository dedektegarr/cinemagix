const Hero = () => {
  return (
    <section
      className="relative h-[600px] bg-indigo-700 bg-[url('https://image.tmdb.org/t/p/original/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg')] 
    bg-cover bg-center flex items-center"
    >
      <div className="absolute h-full w-full top-0 left-0 bg-gradient-to-t from-color-dark-2 to-color-dark-2/50"></div>
      <div className="relative container">
        <h1>Habibi</h1>
      </div>
    </section>
  );
};

export default Hero;
