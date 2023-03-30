import React, { useState } from "react";
import { firestoreData } from "../firebase/config";

const SuperheroForm = () => {
  const [name, setSupName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [age, setSupAge] = useState(null);

  const nameHandler = (e) => {
    setSupName(e.target.value);
  };
  const powerHandler = (e) => {
    setSuperpower(e.target.value);
  };
  const ageHandler = (e) => {
    setSupAge(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newSupHero = { name, superpower, age };
    await firestoreData.collection("superheroes").add(newSupHero);
    setSupName("");
    setSuperpower("");
    setSupAge("");
  };

  return (
    <form className="superhero-form" onSubmit={submitHandler}>
      <label className="superhero-form-label" htmlFor="form-name">
        Name
      </label>
      <input
        onChange={nameHandler}
        value={name}
        className="superhero-form-input"
        id="form-name"
        type="text"
        placeholder="Name"
        required
      />
      <label className="superhero-form-label" htmlFor="form-superpower">
        Superpower
      </label>
      <input
        onChange={powerHandler}
        value={superpower}
        className="superhero-form-input"
        id="form-superpower"
        type="text"
        placeholder="Superpower"
        required
      />
      <label className="superhero-form-label" htmlFor="form-age">
        Age
      </label>
      <input
        onChange={ageHandler}
        value={age}
        className="superhero-form-input"
        id="form-age"
        type="number"
        placeholder="Estimated age"
        min="0"
      />
      <button className="superhero-form-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default SuperheroForm;
