import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Form } from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
