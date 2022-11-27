import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pages, setActualPage, actualPage }) => {
  
  const previous = window.innerWidth > 767 ? "Previous" : "<";
  const next = window.innerWidth > 767 ? "Next" : ">";
  const marginPagesDisplayed = window.innerWidth > 767 ? 3 : 1;
  

  const buttonStyles =
    "bg-rose-500 hover:bg-rose-700 text-white py-1 px-3 lg:py-2 lg:px-5 font-signika font-semibold rounded-full text-sm md:text-base lg:text-lg";
  const buttonHoverStyles =
    "bg-lime-400 hover:bg-lime-600 text-zinc-700";

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={next}
        onPageChange={(data) => setActualPage(data.selected + 1)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={marginPagesDisplayed}
        pageCount={pages}
        previousLabel={previous}
        className="inline-flex justify-center gap-1 "
        pageLinkClassName={buttonStyles}
        previousLinkClassName={buttonStyles}
        nextLinkClassName={buttonStyles}
        breakLinkClassName={buttonStyles}
        activeLinkClassName={buttonHoverStyles}
        forcePage={actualPage-1}
        disabledLinkClassName= "bg-zinc-500 pointer-events-none"
      />
    </>
  );
};

export default React.memo(Pagination);
