import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getbook from "../Data/data";
import Slider from "react-slick";
import Cards from "./Cards";
function Freebooks() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getbook(setList);
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const filterData = list.filter((book) => book.category === "Free");

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Books</h1>
          <p>
            Discover a curated selection of free books that cater to a variety
            of interests and genres. Whether you're looking for fiction,
            non-fiction, or educational resources, our collection has something
            for everyone. Dive into these literary treasures and expand your
            knowledge without spending a dime!
          </p>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {filterData.map((data, i) => {
              return <Cards item={data} key={data.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebooks;
