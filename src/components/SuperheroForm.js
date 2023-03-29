import React from "react";

const SuperheroForm = () => {
  return (
    <form className="superhero-form">
      <label className="superhero-form-label" htmlFor="form-name">
        Name
      </label>
      <input
        className="superhero-form-input"
        id="form-name"
        type="text"
        placeholder="Name"
      />
      <label className="superhero-form-label" htmlFor="form-superpower">
        Superpower
      </label>
      <input
        className="superhero-form-input"
        id="form-superpower"
        type="text"
        placeholder="Superpower"
      />
      <label className="superhero-form-label" htmlFor="form-age">
        Age
      </label>
      <input
        className="superhero-form-input"
        id="form-age"
        type="number"
        placeholder="Estimated age"
      />
      <button className="superhero-form-btn">Add</button>
    </form>
  );
};

export default SuperheroForm;
