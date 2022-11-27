import Pagination from "./assets/pagination/pagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardsGroup from "./assets/cards/cards-groups";
import Error from "./assets/fetch-error/error";
import NavBar from "./assets/filters/nav-bar";
import Header from "./assets/header";
import LoadingSpinner from "./assets/loading";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [search, setSearch] = useState("");
  const [actualPage, setActualPage] = useState(1);
  const [pages, setPages] = useState(0);

  const url = `https://rickandmortyapi.com/api/character/?status=${status}&species=${species}&name=${search}&page=${actualPage}`;
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data.results);
      setPages(response.data.info.pages);
      setError(false);
    } catch (error) {
      setError(true);
      setPages(0);
    }

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return (
    <div className="flex  flex-col items-center pb-6 pt-3 px-20 gap-9 bg-gradient-to-tr from-lime-400 to-sky-500">
      <Header />
      <>
      {pages > 0 ? <Pagination pages={pages} setActualPage={setActualPage} actualPage={actualPage}/> : <></>}
      </>
      <div className="flex gap-11">
        <NavBar
          species={species}
          status={status}
          setStatus={setStatus}
          setSpecies={setSpecies}
          setSearch={setSearch}
          search={search}
          pages={pages}
          setActualPage={setActualPage}
        />
        {loading ? (
          <LoadingSpinner loading={loading} />
        ) : error ? (
          <Error />
        ) : (
            <CardsGroup data={data} />
        )}
      </div>
    </div>
  );
};

export default App;
