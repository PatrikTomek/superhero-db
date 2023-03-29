import React from "react";
import { firestoreData } from "../firebase/config";

const Superhero = (props) => {
  const deleteHandler = (id) => {
    firestoreData.collection("superheroes").doc(id).delete();
  };
  const { id, name, superpower, age } = props;


  return (
    <li className="superhero" key={id}>
      <div className="superhero-label">
        <p>Name:</p>
        <p>Superpower:</p>
        <p>Estimated age:</p>
      </div>
      <div className="superhero-data">
        <p>{name}</p>
        <p>{superpower}</p>
        <p>{age}</p>
      </div>
      <button onClick={() => deleteHandler(id)} className="superhero-delete-btn">
        X
      </button>
    </li>
  );
};

export default Superhero;
