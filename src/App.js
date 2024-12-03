import './App.css';
import Login from "./login/Login";
import Home from "./home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
