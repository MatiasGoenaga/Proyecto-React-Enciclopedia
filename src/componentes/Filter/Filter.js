import React from "react";
import Status from "./Categoria/Status";
import Especie from "./Categoria/Especie";
import Genero from "./Categoria/Genero";

const Filter = ({ setPageNumber, setStatus, setGender, setSpecies }) => {
  let clear = () => {
    setPageNumber("");
    setStatus("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filtro</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Borrar Filtros
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Especie setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Genero setPageNumber={setPageNumber} setGender={setGender} />
      </div>
    </div>
  );
};

export default Filter;
