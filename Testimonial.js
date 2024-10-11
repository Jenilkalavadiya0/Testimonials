import React from "react";
import Card from "./Card";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
  const [index, setIndex] = useState(0);
  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  let reviews = props.reviews;
  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl">
      <Card review={reviews[index]} />

      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold text-center place-content-center mx-auto mb-3">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>

      <div>
        <button
          onClick={surpriseHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Surprise me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
