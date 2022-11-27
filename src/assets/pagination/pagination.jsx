import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pages, setActualPage, actualPage }) => {
  const buttonStyles =
    "bg-rose-500 hover:bg-rose-700 text-white py-2 px-5 font-signika font-semibold rounded-full text-lg";
  const buttonHoverStyles =
    "bg-lime-400 hover:bg-lime-600 text-zinc-700 py-2 px-5 font-signika font-semibold rounded-full text-lg";

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={(data) => setActualPage(data.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={pages}
        previousLabel="Previous"
        className="inline-flex justify-center gap-1"
        pageLinkClassName={buttonStyles}
        previousLinkClassName={buttonStyles}
        nextLinkClassName={buttonStyles}
        breakLinkClassName={buttonStyles}
        activeLinkClassName={buttonHoverStyles}
        forcePage={actualPage-1}
      />
    </>
  );
};

export default Pagination;
