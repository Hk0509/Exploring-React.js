import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [getAge, setGetAge] = useState(null);
  const [getName, setGetName] = useState("");
  const predictAge = () => {
    Axios.get(`https://api.agify.io/?name=${getName}`).then((res) => {
      setGetAge(res.data);
    });
  };

  return (
    <div className="App">
      <input
        placeholder="Type your name: "
        onChange={(event) => {
          setGetName(event.target.value);
        }}
      ></input>
      <button onClick={predictAge}> Predict </button>
      <p>Predicted Name: {getAge?.name}</p>
      <p>Predicted Age: {getAge?.age}</p>
      <p>Predicted count: {getAge?.count}</p>
    </div>
  );
}

export default App;
