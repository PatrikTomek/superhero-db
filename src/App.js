import React, { useEffect, useState } from "react";
import { projectFirestore } from "./firebase/config";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    projectFirestore
      .collection("superheroes")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("Database is empty.");
        } else {
          let result = [];
          snapshot.docs.forEach((supHero) => {
            result.push({ id: supHero.id, ...supHero.data() });
          });
          setData(result);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {data.map((supHero) => {
        const { id, name, superpower, age } = supHero;
        return (
          <div key={id}>
            {name}, {superpower}, {age}
          </div>
        );
      })}
    </div>
  );
};

export default App;
