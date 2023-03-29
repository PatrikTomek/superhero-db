import React from "react";
import Superhero from "./Superhero";

const SuperheroesList = (props) => {
  return (
    <ul className="superheroes-list">
      {props.data.map((supHero) => {
        const { id, name, superpower, age } = supHero;
        return (
          <Superhero key={id} name={name} superpower={superpower} age={age} />
        );
      })}
    </ul>
  );
};

export default SuperheroesList;
