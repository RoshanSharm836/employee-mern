import "./App.css";
import Table from "./Component/Table";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Form from "./Component/Form";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/main" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
