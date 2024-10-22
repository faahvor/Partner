import { CiClock2, CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Time = () => {
  return (
    <div className="bg-[#D5EAFF] h-full  pt-[9rem]  flex flex-col md:flex-row relative  ">
      <div>
        <div className="pl-[5rem]">
          <h1 className="text-[26.95px] text-[#ED3237] font-metro font-medium">
            Edition X
          </h1>
          <p className="font-syne font-bold text-[53.44px] md:w-[689px] text-[#05284C]">
            Growing Your Travel Business with PartnerPlus Pro
          </p>
          <p className="text-[#999999] text-[16px] font-medium font-metro flex items-center gap-3 mb-[5rem]">
            {" "}
            <span>View Synopsis</span>{" "}
            <span className="mt-1">
              <FaArrowRight />
            </span>
          </p>
        </div>
        <div className="absolute bg-[#05284C] justify-center items-center rounded-2xl text-[23.14px] font-metro font-medium  text-white flex flex-col top-[22rem] right-[25rem] p-[2rem] ">
          <span>
            <MdArrowOutward />
          </span>
          <span>Register</span>
        </div>
        <div className="bg-[#05284C]  p-4 mt-[-1.5rem] z-10 h-[17rem]  flex rounded-tr-2xl justify-center items-center">
          <div className="flex gap-[2rem]">
            <h1 className="h1">
              <span className="icon">
                <SlCalender />
              </span>
              <span>26th</span>
              <span>Sep, 2024</span>
            </h1>
            <h1 className="h1">
              <span className="icon">
                <CiClock2 />
              </span>
              <span>12:00 PM</span>
              <span> (WAT)</span>
            </h1>
            <h1 className="h1">
              <span className="icon">
                <CiLocationOn />
              </span>
              <span>YouTube</span>
              <span> Live</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-[6rem]">
        <img
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729545868/sinclair/Line_pattern_pcgsib.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Time;
