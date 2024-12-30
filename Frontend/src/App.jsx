import React from "react";
import Home from "./Home/home";
import Books from "./Books/Books";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
