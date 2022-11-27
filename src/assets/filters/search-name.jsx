import React from "react";

const SearchName = ({ handleSearch,search,setActualPage }) => {

    const handleChange = (e) => {
        handleSearch(e.target.value);
        setActualPage(1);
    }

  return (
    <div>
      <input type="text" value={search} onChange={handleChange} placeholder="Character name" className=" bg-rose-500 py-2 px-3 font-signika font-medium rounded-full text-lg w-full text-white placeholder-white"/>
    </div>
  );
};

export default React.memo(SearchName);
