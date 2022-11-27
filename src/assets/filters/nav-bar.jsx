import React from "react";
import SearchName from "./search-name";
import Species from "./species";
import Status from "./status";

const NavBar = ({
  setStatus,
  setSearch,
  setSpecies,
  status,
  species,
  search,
  setActualPage
}) => {
  const handleStatus = (param) => {
    setStatus(param);
  };

  const handleSpecies = (param) => {
    setSpecies(param);
  };

  const handleSearch = (param) => {
    setSearch(param);
  };

  const handleReset = () => {
    setStatus("");
    setSpecies("");
    setSearch("");
    setActualPage(1);
  };

  return (
    <aside className="flex flex-col w-1/4 gap-3 max-w-[300px]">
      <div>
        <h1 className="text-3xl font-bold p-1 font-signika">Search</h1>
        <SearchName handleSearch={handleSearch} search={search} setActualPage={setActualPage}/>
      </div>
      <div>
        <h1 className="text-3xl font-bold p-1 font-signika">Status</h1>
        <Status handleStatus={handleStatus} selected={status} setActualPage={setActualPage}/>
      </div>
      <div>
        <h1 className="text-3xl font-bold p-1 font-signika">Species</h1>
        <Species handleSpecies={handleSpecies} selected={species} setActualPage={setActualPage}/>
      </div>
      <button
        onClick={handleReset}
        className={
          "bg-rose-500 hover:bg-rose-700 text-white py-2 px-5 font-signika font-semibold rounded-full text-lg"
        }
      >
        Reset
      </button>
    </aside>
  );
};

export default NavBar;
