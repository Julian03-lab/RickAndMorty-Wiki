import React from "react";
import FilterButton from "./filter-button";

const status = ["Alive", "Dead", "unknown"];

const Status = ({ handleStatus, selected,setActualPage }) => {
  const handleClick = (e) => {
    setActualPage(1)
    selected !== e.target.value
      ? handleStatus("")
      : handleStatus(e.target.innerText);
  };

  return (
    <div>
      {status.map((info, i) => (
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

export default React.memo(Status);
