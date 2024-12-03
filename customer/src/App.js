import "./App.css";
import Login from "./login/Login";
import Home from "./home/Home";
import Tools from "./tools/Tools";
import StandingOrder from "./standingOrder/StandingOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navbar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="tools" element={<Tools />} />
          <Route path="create-standing-order" element={<StandingOrder />} />
        </Routes>
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
