import React, { useEffect, useState } from "react";
import "./App.css";
import SuperheroesList from "./components/SuperheroesList";
import SuperheroForm from "./components/SuperheroForm";
import { firestoreData } from "./firebase/config";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    firestoreData
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
    <div className="app">
      {error && <p>{error}</p>}
      <SuperheroForm />
      <SuperheroesList data={data} />
    </div>
  );
};

export default App;
