import { Await, defer, useLoaderData } from "react-router-dom";
import fetchPeopleDetails from "../../api/people-details";
import Section from "../../components/utils/Section";
import SlideHorizontal from "../../components/utils/SlideHorizontal";
import MovieList from "../../components/Movies/MovieList/MovieList";
import { useEffect, useState } from "react";

const PeopleDetailsPage = () => {
  const { people, movie_credits } = useLoaderData();
  const [credits, setCredits] = useState(null);
  const [readMore, setReadMore] = useState(false);

  const fetchCredits = async () => {
    const data = await movie_credits;
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
  }, [people]);

  return (
    <div className="container grid grid-cols-8 gap-4 md:gap-8 py-8">
      <div className="col-span-8 md:col-span-2">
        <img
          className="block mx-auto rounded-lg shadow-lg md:w-full w-[210px] h-auto"
          src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${people.profile_path}`}
          alt="Person"
        />

        <h1 className="text-center md:hidden py-6 text-2xl font-bold">
          {people.name}
        </h1>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold mt-6">Personal Info</h2>

          <div>
            <p className="font-bold">Known For</p>
            <p className="text-color-dark-3">{people.known_for_department}</p>
          </div>
          <div>
            <p className="font-bold">Known Credits</p>
            <p className="text-color-dark-3">{credits?.length}</p>
          </div>
          <div>
            <p className="font-bold">Gender</p>
            <p className="text-color-dark-3">
              {people.gender === 1 ? "Female" : "Male"}
            </p>
          </div>
          <div>
            <p className="font-bold">Birthday</p>
            <p className="text-color-dark-3">{people.birthday}</p>
          </div>
          <div>
            <p className="font-bold">Place of Birth</p>
            <p className="text-color-dark-3">{people.place_of_birth}</p>
          </div>
        </div>
      </div>
      <div className="col-span-8 md:col-span-6">
        <h1 className="text-4xl font-bold mb-4 md:block hidden">
          {people.name}
        </h1>
        <Section>
          <Section.Header title="Biography" />
          <p
            className={`-mt-3 ${readMore ? "line-clamp-none" : "line-clamp-6"}`}
          >
            {people.biography}
          </p>
          <button
            onClick={() => setReadMore(!readMore)}
            className="mt-1 text-color-dark-3 border-b border-color-dark-3 hover:text-color-primary hover:border-color-primary"
          >
            {readMore ? "Less" : "More"}
          </button>
        </Section>
        <Section>
          <Section.Header title="Known For" />

          <SlideHorizontal className="-mt-3">
            <MovieList
              movies={credits}
              className="flex gap-4"
              itemClassName="w-[150px] h-auto"
            />
          </SlideHorizontal>
        </Section>
      </div>
    </div>
  );
};

export const loader = async ({ params }) => {
  const people = await fetchPeopleDetails({ personId: params.people_id });
  const movie_credits = fetchPeopleDetails({
    personId: `${params.people_id}/combined_credits`,
  });
  return defer({
    people,
    movie_credits,
  });
};

export default PeopleDetailsPage;
