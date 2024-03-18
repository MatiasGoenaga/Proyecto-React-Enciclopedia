import React, { useState } from "react";
import FilterBTN from "../FilterBtn";

const Genero = ({ setGender, setPageNumber }) => {
  let genders = ["male", "female", "genderless", "unknown"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Genero
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="gender"
              task={setGender}
              setPageNumber={setPageNumber}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genero;
