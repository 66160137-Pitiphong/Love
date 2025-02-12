// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Surprise from "./pages/Surprise";
import Gallery from "./pages/Gallery";
import Song from "./pages/Song";

const App = () => (
  <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/song" element={<Song />} />
      </Routes>
    </div>
  </Router>
);

export default App;