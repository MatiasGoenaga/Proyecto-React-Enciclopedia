import React, { useState, useEffect } from "react";
import InputGroup from "../componentes/Filter/Categoria/InputGroup";
import Card from "../componentes/Card/Card";

const Ubicaciones = () => {
  let [results, setResults] = useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
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
          Nombre de la Ubicación :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Tipo: {type === "" ? "Unknown" : type} </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Elige una Ubicación</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/ubicaciones/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicaciones;
