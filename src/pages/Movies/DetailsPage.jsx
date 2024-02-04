import { defer, useLoaderData } from "react-router-dom";
import fetchMovieDetails from "../../api/movie-details";
import { useEffect, useRef } from "react";
import Button from "../../components/UI/Button/Button";

const DetailsPage = () => {
  const sectionRef = useRef(null);

  const { details } = useLoaderData();
  const { title, overview, tagline, backdrop_path } = details;

  useEffect(() => {
    sectionRef.current.style.background = `url('https://image.tmdb.org/t/p/original${backdrop_path})`;
    sectionRef.current.style.backgroundPosition = `top`;
    sectionRef.current.style.backgroundSize = `cover`;
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="relative h-[550px] container rounded-lg flex items-center"
      >
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-color-dark-2 to-color-dark-2/0"></div>

        <div className="relative max-w-[500px]">
          <h1 className="text-4xl font-bold">{title}</h1>
          <blockquote className="text-sm mt-2 italic">{tagline}</blockquote>
          <div className="divide-x-2 my-4 divide-color-dark-3 text-color-dark-3">
            <span className="pr-3">2016</span>
            <span className="px-3">13+</span>
            <span className="px-3">1j 32m</span>
            <span className="pl-3">Komedi</span>
          </div>

          <p className="leading-relaxed">{overview}</p>

          <div className="flex gap-2 mt-6">
            <Button
              className="bg-color-primary p-3"
              rounded={true}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  viewBox="0 -960 960 960"
                  width="18"
                  fill="white"
                >
                  <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                </svg>
              }
            ></Button>
            <Button
              className="hover:text-slate-300"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="white"
                >
                  <path d="M320-200v-560l440 280-440 280Z" />
                </svg>
              }
            >
              Play Trailer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const loader = async ({ params }) => {
  const details = await fetchMovieDetails({ movieId: params.movie_id });
  return defer({
    details,
  });
};

export default DetailsPage;
