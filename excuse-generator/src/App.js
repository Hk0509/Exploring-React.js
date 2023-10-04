import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [getExcuse, setGetExcuse] = useState("");
  const fetchData = (event) => {
    Axios.get(
      `https://excuser-three.vercel.app/v1/excuse/${event.currentTarget.name}`
    ).then((res) => {
      setGetExcuse(res.data[0].excuse);
    });
  };
  return (
    <div className="App">
      <button name="family" onClick={fetchData}>
        Family
      </button>
      <button name="office" onClick={fetchData}>
        Office
      </button>
      <button name="party" onClick={fetchData}>
        Party
      </button>
      <p>{getExcuse}</p>
    </div>
  );
}

export default App;
