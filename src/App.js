import React, { useEffect, useState } from "react";
import "./App.css";
import SuperheroesList from "./components/SuperheroesList";
import SuperheroForm from "./components/SuperheroForm";
import { firestoreData } from "./firebase/config";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const unsub = firestoreData.collection("superheroes").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("Database is empty.");
          setData([]);
        } else {
          let finalData = [];
          snapshot.docs.forEach((supHero) => {
            finalData.push({ id: supHero.id, ...supHero.data() });
          });
          setData(finalData);
          setError(false);
        }
      },
      (err) => {
        setError(err.message);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      <div className="app">
        {error && <p>{error}</p>}
        <h1 className="main-header">Superhero database</h1>
        <SuperheroForm />
        <SuperheroesList data={data} />
      </div>
      <div className="signature">
        Coded by{" "}
        <a href="https://patriktomek.cz/" target="_blank" rel="noreferrer">
          Patrik Tomek
        </a>
      </div>
    </div>
  );
};

export default App;
