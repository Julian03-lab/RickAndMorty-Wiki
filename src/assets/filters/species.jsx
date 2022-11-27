import React from "react";
import FilterButton from "./filter-button";

const species = [
  "Human",
  "Alien",
  "Humanoid",
  "Poopybutthole",
  "Mythological",
  "Unknown",
  "Animal",
  "Disease",
  "Robot",
  "Cronenberg",
  "Planet",
];

const Species = ({ handleSpecies, selected,setActualPage }) => {
  const handleClick = (e) => {
    setActualPage(1)
    selected !== e.target.value
      ? handleSpecies("")
      : handleSpecies(e.target.innerText);
  };

  return (
    <div className="">
      {species.map((info, i) => (
        <FilterButton
          key={i}
          category={info}
          handleClick={handleClick}
          selected={selected}
        />
      ))}
    </div>
  );
};

export default Species;
