import React from "react";

const Superhero = (props) => {
  return (
    <li className="superhero" key={props.id}>
      <div className="superhero-label">
        <p>Name:</p>
        <p>Superpower:</p>
        <p>Estimated age:</p>
      </div>
      <div className="superhero-data">
        <p>{props.name}</p>
        <p>{props.superpower}</p>
        <p>{props.age}</p>
      </div>
      <button className="superhero-delete-btn">X</button>
    </li>
  );
};

export default Superhero;
