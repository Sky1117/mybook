import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Freebooks from "../components/Freebooks";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner />
      <Freebooks />
      <Footer />
    </div>
  );
}
