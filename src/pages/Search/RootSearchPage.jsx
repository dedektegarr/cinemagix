import React, { useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import Tabs from "../../components/UI/Tabs/Tabs";

const RootSearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState("all");

  const handleChangeType = (item) => {
    setActiveType(item.id);

    navigate(`/search/${item.id}?query=${searchParams.get("query")}`);
  };

  const tabs = [
    { id: "all", label: "All" },
    { id: "movie", label: "Movies" },
    { id: "people", label: "People" },
  ];

  return (
    <div className="container grid grid-cols-5 py-8 gap-4 lg:gap-8">
      <div className="col-span-1">
        <Tabs
          items={tabs}
          activeItem={{ id: activeType }}
          onSelect={handleChangeType}
        />
      </div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
};
export default RootSearchPage;
