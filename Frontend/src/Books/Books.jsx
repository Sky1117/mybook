import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Book from "../components/Book";
export default function Books() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Book></Book>
      </div>
      <Footer />
    </div>
  );
}
