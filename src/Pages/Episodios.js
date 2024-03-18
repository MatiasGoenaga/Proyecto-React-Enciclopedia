import React, { useState, useEffect } from "react";
import Card from "../componentes/Card/Card";
import InputGroup from "../componentes/Filter/Categoria/InputGroup";

const Episodios = () => {
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, episode, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center mb-3">
          Nombre del Episodio :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Dia de Emisión: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Elige un Episodio</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/episodios/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodios;
