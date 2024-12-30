import React from "react";
import list from "../Data/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
export default function Book() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here!</span> :)
          </h1>
          <p className="mt-12 my-6">
            Welcome to our extensive collection of books, where every page
            invites you to explore new worlds and ideas. From timeless classics
            to contemporary bestsellers, our curated selection caters to every
            reader's taste and interest. Whether you're seeking gripping
            fiction, insightful non-fiction, or captivating children's
            literature, you'll find it all here. Each title is carefully chosen
            to ensure quality and relevance, making it easy for you to discover
            your next great read. Dive into our library and let your literary
            journey begin!
          </p>
          <Link
            to="/"
            className="text-white mt-6 bg-pink-500 px-4 py-2 rounded hover:bg-pink-700 duration-300"
          >
            Back
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => {
            return <Cards key={item.id} item={item}></Cards>;
          })}
        </div>
      </div>
    </>
  );
}
