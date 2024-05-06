import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="mx-2">
      <Routes>
        <Route path="/" element={<Home />} />  
      </Routes>
    </div>
  );
}

export default App;
