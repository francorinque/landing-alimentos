import { useState } from "react";
import data from "../mock/data.json";

import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsChatQuote,
} from "react-icons/bs";

const Quotes = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) {
      setIndex(data["seccion5-quotes"].length - 1);
      return;
    }
    setIndex(index - 1);
  };
  const handleNext = () => {
    if (index === data["seccion5-quotes"].length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  return (
    <div className="relative h-[300px] flex items-center justify-center flex-col">
      <div className="mb-5 flex items-center justify-center text-apple-500">
        <BsChatQuote size="30px" />
      </div>
      <h2
        className="
        w-[270px] md:w-[600px] text-secondary text-center
       text-[14px] md:text-[16px] font-semibold  mx-auto"
      >
        {data["seccion5-quotes"][index]}
      </h2>
      {/* arrows */}
      <button
        className="
      absolute top-1/2 left-0 w-10 h-10 rounded-full
       bg-secondary text-apple-50 shadow-md flex items-center justify-center"
        onClick={handlePrev}
      >
        <BsArrowLeftShort size="25px" />
      </button>
      <button
        className="
      absolute top-1/2 right-0 w-10 h-10 rounded-full
       bg-secondary text-apple-50 shadow-md flex items-center justify-center"
        onClick={handleNext}
      >
        <BsArrowRightShort size="25px" />
      </button>
    </div>
  );
};
export default Quotes;
