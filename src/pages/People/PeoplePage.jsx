import { defer, useLoaderData } from "react-router-dom";
import { fetchPeople } from "../../api/popular-people";
import Section from "../../components/utils/Section";
import PeopleList from "../../components/People/PeopleList";
import Pagination from "../../components/utils/Pagination";
import { useEffect, useState } from "react";

let firstPage = true;

const PeoplePage = () => {
  const [page, setPage] = useState(1);
  const [nextPeoples, setNextPeoples] = useState(null);
  const { peoples } = useLoaderData();

  const handleChangePage = (page) => {
    firstPage = false;
    setPage(page);
  };

  const fetchNextPeoples = async () => {
    const nextPeoples = await fetchPeople(page);

    setNextPeoples(nextPeoples);
  };

  useEffect(() => {
    if (!firstPage) {
      fetchNextPeoples();
    }
  }, [page]);

  return (
    <div className="container">
      <Section>
        <Section.Header title="Popular People" />
        <PeopleList peoples={!nextPeoples ? peoples : nextPeoples} />
      </Section>

      <div className="flex items-center justify-center py-8">
        <Pagination
          activePage={page}
          totalPage={peoples.total_pages}
          onChangePage={handleChangePage}
        />
      </div>
    </div>
  );
};

export const loader = async () => {
  const peoples = await fetchPeople(1);
  return defer({
    peoples,
  });
};

export default PeoplePage;
