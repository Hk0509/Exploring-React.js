import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

// fetch("https://catfact.ninja/fact")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

function App() {
  const [getFact, setGetFact] = useState("");

  const generateFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setGetFact(res.data.fact);
    });
  };
  useEffect(() => {
    generateFact();
  }, []);

  return (
    <div className="App">
      <button onClick={generateFact}>Generate Facts</button>
      <p>{getFact}</p>
    </div>
  );
}

export default App;
