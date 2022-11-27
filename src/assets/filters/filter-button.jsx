import React from "react";

const FilterButton = ({ category, handleClick, selected }) => {
  const selectedBtn =
    selected === category
      ? "bg-lime-500 hover:bg-lime-700 text-zinc-700 py-2 px-5 font-signika font-semibold rounded-full text-lg m-1"
      : "bg-rose-500 hover:bg-rose-700 text-white py-2 px-5 font-signika font-semibold rounded-full text-lg m-1";

  return (
    <button onClick={handleClick} className={selectedBtn}>
      {category}
    </button>
  );
};

export default React.memo(FilterButton);
