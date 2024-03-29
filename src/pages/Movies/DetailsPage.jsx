import { Await, Link, Outlet, defer, useLoaderData } from "react-router-dom";
import fetchMovieDetails from "../../api/movie-details";
import { useEffect, useRef, useState } from "react";
import Button from "../../components/UI/Button/Button";
import Section from "../../components/utils/Section";
import SlideHorizontal from "../../components/utils/SlideHorizontal";
import Card from "../../components/utils/Card";
import MovieList from "../../components/Movies/MovieList/MovieList";
import MovieReview from "../../components/Movies/MovieReview/MovieReview";
import MovieVideo from "../../components/Movies/MovieVideo/MovieVideo";
import useAddToFavorite from "../../hooks/useAddToFavorite";

const DetailsPage = () => {
  const [trailer, setTrailer] = useState(null);

  const sectionRef = useRef(null);
  const ageRatingRef = useRef(null);

  const {
    details,
    ageRatings,
    reviews,
    recommendations,
    keywords,
    videos,
    credits,
  } = useLoaderData();

  const { handleAddToFavorite, isFavorite } = useAddToFavorite(details);

  const {
    title,
    release_date,
    genres,
    runtime,
    overview,
    vote_average,
    tagline,
    backdrop_path,
  } = details;

  const currencyFormat = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const getTrailer = async () => {
    const trailers = await videos;
    const trailer = trailers.results.find(
      (video) => video.type.toLowerCase() === "trailer"
    );

    setTrailer(trailer.key);
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
  }, [details]);

  useEffect(() => {
    getAgeRatings();
    getTrailer();
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="relative h-[550px] container rounded-lg flex items-center"
      >
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t md:bg-gradient-to-r from-color-dark-2 to-color-dark-2/60 md:to-color-dark-2/0"></div>

        <div className="relative max-w-[600px] md:p-8 text-center md:text-left">
          <h1 className="text-4xl font-bold">{title}</h1>
          <blockquote className="text-sm mt-2 italic">{tagline}</blockquote>
          <div className="divide-x my-4 divide-color-dark-3 text-color-dark-3">
            <span className="pr-3">{getDates(release_date).year}</span>
            <span className="px-3" ref={ageRatingRef}></span>
            <span className="px-3">{convertRuntime(runtime)}</span>
            <span className="pl-3">{genres[0].name}</span>
          </div>

          <p className="leading-relaxed">{overview}</p>

          <div className="flex items-center justify-center md:justify-start mt-6">
            <Button
              className="translate-y-[2px]"
              onClick={handleAddToFavorite}
              rounded={true}
              icon={
                isFavorite ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    fill="red"
                  >
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                    fill="white"
                  >
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                  </svg>
                )
              }
            />
            <div className="flex items-center gap-1 ml-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  fill="#F8E559"
                >
                  <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                </svg>
              </span>
              <p className="translate-y-[2px] font-medium">
                {vote_average.toFixed(1)}
              </p>
            </div>
            <Link to={`video/${trailer}`}>
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
            </Link>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-4 container md:mt-8">
        <div className="col-span-12 lg:col-span-9 flex flex-col gap-8">
          {/* CREDITS */}
          <Section>
            <Section.Header title="Top Billed Cast" />

            <SlideHorizontal>
              <ul className="flex gap-4">
                <Await
                  resolve={credits}
                  children={(credits) =>
                    credits.cast.map((cast) => (
                      <Card
                        key={cast.id}
                        className="min-w-[130px] lg:min-w-[150px]"
                      >
                        <Card.Image
                          alt="Cast"
                          className="max-h-[220px]"
                          src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${cast.profile_path}`}
                        />

                        <Card.Text
                          title={cast.name}
                          subTitle={cast.character}
                        />
                      </Card>
                    ))
                  }
                />
              </ul>
            </SlideHorizontal>
          </Section>

          {/* REVIEWS */}

          <Section>
            <Section.Header title="Reviews">
              <Link
                to="reviews"
                className="ml-auto text-sm text-color-dark-3 hover:text-color-primary"
              >
                View All Reviews
              </Link>
            </Section.Header>

            <Await
              resolve={reviews}
              children={(reviews) => (
                <>
                  {reviews.total_results ? (
                    <MovieReview review={reviews.results[0]} />
                  ) : (
                    <p className="bg-color-dark-1 text-color-dark-3 text-center rounded-md p-4">
                      No reviews yet
                    </p>
                  )}
                </>
              )}
            />
          </Section>

          {/* VIDEOS */}
          <Section>
            <Section.Header title="Videos" />

            <SlideHorizontal>
              <ul className="flex gap-4">
                <Await
                  resolve={videos}
                  children={(videos) =>
                    videos.results.map((video) => (
                      <Link to={`video/${video.key}`} key={video.id}>
                        <MovieVideo video={video} key={video.id} />
                      </Link>
                    ))
                  }
                />
              </ul>
            </SlideHorizontal>
          </Section>

          {/* RECOMMENDATIONS */}
          <Section>
            <Section.Header title="Recommendations" />

            <SlideHorizontal>
              <Await
                resolve={recommendations}
                children={(recommendations) => (
                  <MovieList
                    className="flex gap-4"
                    itemClassName="w-[150px] lg:w-[200px]"
                    movies={recommendations.results}
                  />
                )}
              />
            </SlideHorizontal>
          </Section>
        </div>

        <div className="col-span-12 lg:col-span-3 py-5 px-0 lg:px-3 flex flex-col gap-4">
          <div>
            <p className="font-bold">Status</p>
            <p className="text-color-dark-3">{details.status}</p>
          </div>
          <div>
            <p className="font-bold">Originial Language</p>
            <p className="text-color-dark-3">
              {details.original_language.toUpperCase()}
            </p>
          </div>
          <div>
            <p className="font-bold">Budget</p>
            <p className="text-color-dark-3">
              {currencyFormat(details.budget)}
            </p>
          </div>
          <div>
            <p className="font-bold">Revenue</p>
            <p className="text-color-dark-3">
              {currencyFormat(details.revenue)}
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Keywords</h3>
            <div className="flex flex-wrap gap-1">
              <Await
                resolve={keywords}
                children={(keywords) =>
                  keywords.keywords.map((keyword) => (
                    <p
                      key={keyword.id}
                      className="py-2 px-3 bg-color-dark-1 rounded-md text-xs"
                    >
                      {keyword.name}
                    </p>
                  ))
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Outlet />
    </div>
  );
};

export const loader = async ({ params }) => {
  const details = await fetchMovieDetails({ movieId: params.movie_id });
  const ageRatings = await fetchMovieDetails({
    movieId: `${params.movie_id}/release_dates`,
  });
  const videos = fetchMovieDetails({
    movieId: `${params.movie_id}/videos`,
  });
  const credits = fetchMovieDetails({
    movieId: `${params.movie_id}/credits`,
  });
  const keywords = fetchMovieDetails({
    movieId: `${params.movie_id}/keywords`,
  });
  const recommendations = fetchMovieDetails({
    movieId: `${params.movie_id}/recommendations`,
  });
  const reviews = fetchMovieDetails({
    movieId: `${params.movie_id}/reviews`,
  });

  return defer({
    details,
    ageRatings,
    videos,
    credits,
    keywords,
    recommendations,
    reviews,
  });
};

export default DetailsPage;
