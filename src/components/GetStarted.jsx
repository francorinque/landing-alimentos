import data from "../mock/data.json";
import CustomLink from "./ui/CustomLink";

import { BsArrowRight } from "react-icons/bs";

const GetStarted = () => {
  return (
    <div
      className='min-h-[300px] bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-custom px-4 py-20 md:px-[150px]'
      id='comenzar'
    >
      <div className='flex flex-col gap-2 justify-center items-start max-w-[450px]'>
        <h2 className='text-2xl md:text-4xl font-bold title-gradient text-left'>
          {data["section-seven"].title}
        </h2>
        <div className='flex items-center justify-center md:justify-start gap-2 w-min-content group cursor-pointer'>
          <a
            href={`${data["section-seven"].link.href}`}
            className='text-apple-50 group-[&:hover]:scale-[0.95]'
          >
            {data["section-seven"].link.text}
          </a>
          <BsArrowRight
            className='text-apple-50 group-[&:hover]:scale-[0.95] '
            size='25px'
          />
        </div>
      </div>
      {/* img */}
      <img
        src={data["section-seven"].img}
        alt='imagen de un grupo de personas trabajando'
        className='rounded-custom mt-10 shadow-sm shadow-apple-50/20
          w-full  object-cover h-auto mx-auto max-h-[500px]
        '
      />
    </div>
  );
};
export default GetStarted;
