import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Card from "./componentes/Card/Card";
import Pagination from "./componentes/Pagination/Pagination";
import Filter from "./componentes/Filter/Filter";
import Navbar from "./componentes/Navbar/Navbar";
import Search from "./componentes/Search/Search";
import Episodios from "./Pages/Episodios";
import Ubicaciones from "./Pages/Ubicaciones";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetails from "./componentes/Card/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodios" element={<Episodios />} />
        <Route path="/episodios/:id" element={<CardDetails />} />

        <Route path="/ubicaciones" element={<Ubicaciones />} />
        <Route path="/ubicaciones/:id" element={<CardDetails />} />
      </Routes>
      ;
    </Router>
  );
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [search, setSearch] = useState("");
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};
export default App;
