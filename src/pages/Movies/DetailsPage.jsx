import { defer, useLoaderData } from "react-router-dom";
import fetchMovieDetails from "../../api/movie-details";
import { useEffect, useRef } from "react";
import Button from "../../components/UI/Button/Button";

const DetailsPage = () => {
  const sectionRef = useRef(null);
  const ageRatingRef = useRef(null);

  const { details, ageRatings, videos } = useLoaderData();
  const {
    title,
    release_date,
    genres,
    runtime,
    overview,
    tagline,
    backdrop_path,
  } = details;

  const getTrailer = () => {
    const trailer = videos.results.find(
      (video) => video.type.toLowerCase() === "trailer"
    );

    return trailer.key;
  };

  const getAgeRatings = async () => {
    const ratingInUS = ageRatings.results
      .find((rating) => rating.iso_3166_1 === "US")
      .release_dates.filter(
        (rating) => rating.certification.length > 0
      )[0].certification;

    ageRatingRef.current.textContent = ratingInUS;
  };

  const convertRuntime = (runtime) => {
    const hour = Math.floor(runtime / 60);
    const minute = runtime % 60;

    return `${hour}h ${minute}m`;
  };

  const getDates = (date) => {
    const newDate = new Date(date);
    return {
      date: newDate.getDay(),
      month: newDate.getMonth(),
      year: newDate.getFullYear(),
    };
  };

  const setSectionBackground = () => {
    sectionRef.current.style.background = `url('https://image.tmdb.org/t/p/original${backdrop_path})`;
    sectionRef.current.style.backgroundPosition = `top`;
    sectionRef.current.style.backgroundSize = `cover`;
  };

  useEffect(() => {
    setSectionBackground();
    getAgeRatings();
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="relative h-[550px] container rounded-lg flex items-center"
      >
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-color-dark-2 to-color-dark-2/0"></div>

        <div className="relative max-w-[600px]">
          <h1 className="text-4xl font-bold">{title}</h1>
          <blockquote className="text-sm mt-2 italic">{tagline}</blockquote>
          <div className="divide-x-2 my-4 divide-color-dark-3 text-color-dark-3">
            <span className="pr-3">{getDates(release_date).year}</span>
            <span className="px-3" ref={ageRatingRef}></span>
            <span className="px-3">{convertRuntime(runtime)}</span>
            <span className="pl-3">{genres[0].name}</span>
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
              target="_blank"
              href={`https://www.youtube.com/watch?v=${getTrailer()}`}
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
  const ageRatings = await fetchMovieDetails({
    movieId: `${params.movie_id}/release_dates`,
  });
  const videos = await fetchMovieDetails({
    movieId: `${params.movie_id}/videos`,
  });

  return defer({
    details,
    ageRatings,
    videos,
  });
};

export default DetailsPage;
