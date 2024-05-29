import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Landingpage from "./components/Landingpage";
import axios from "axios";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
