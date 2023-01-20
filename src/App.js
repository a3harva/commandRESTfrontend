// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Commands from "../src/components/Commnds";
import Home from "./components/Home";
import AddCommandPage from "./components/AddCommandPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/commands" element={<Commands />}></Route>
        <Route path="/commands/add" element={<AddCommandPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
