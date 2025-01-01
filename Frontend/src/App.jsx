import React from "react";
import Home from "./Home/home";
import Books from "./Books/Books";
import { Navigate, Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books"
          element={authUser ? <Books /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
