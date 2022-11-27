import React, { useState } from "react";
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
  setActualPage,
}) => {
  const [dropdownActive, setDropdownActive] = useState("hidden");

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

  const toggleDropdown = () =>
    dropdownActive === "hidden"
      ? setDropdownActive("flex flex-col")
      : setDropdownActive("hidden");

  return (
    <>
      <button
        id="multiLevelDropdownButton"
        onClick={toggleDropdown}
        className="text-white bg-rose-500 hover:bg-rose-70 focus:ring-4 focus:outline-none focus:ring-rose-300 text-xl font-medium font-signika rounded-lg px-5 py-2 text-center inline-flex self-center items-center lg:hidden"
        type="button"
      >
        Filters
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <aside
        className={`${dropdownActive} lg:flex lg:flex-col lg:w-1/4 gap-4 md:px-8 lg:px-0 lg:max-w-[300px] self-center lg:self-start`}
      >
        <div>
          <h1 className="text-3xl font-bold px-1 py-2 font-signika">Search</h1>
          <SearchName
            handleSearch={handleSearch}
            search={search}
            setActualPage={setActualPage}
          />
        </div>
        <div className="md:grid grid-cols-2 lg:grid-cols-1">
          <div>
            <h1 className="text-3xl font-bold px-1 py-2 font-signika">
              Status
            </h1>
            <Status
              handleStatus={handleStatus}
              selected={status}
              setActualPage={setActualPage}
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold px-1 py-2 font-signika">
              Species
            </h1>
            <Species
              handleSpecies={handleSpecies}
              selected={species}
              setActualPage={setActualPage}
            />
          </div>
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
    </>
  );
};

export default React.memo(NavBar);
