import { useState } from "react";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import Synopsis from "./Synopsis";

const Time = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRegisterClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleBackgroundClick = (e) => {
    e.preventDefault();
    setShowModal(false)
  };
  return (
    <div className="bg-[#D5EAFF] h-full  md:pt-[9rem]  flex flex-col md:flex-row relative overflow-hidden ">
      <div>
        <div className="pl-[1rem] pr-[1rem] md:pl-[5rem] md:pr-0 ">
          <h1 className=" text-[#ED3237]  font-metro font-medium  md:text-[26.95px]">
            Edition X
          </h1>
          <p className="font-syne font-bold text-[23.95px] text-center   text-[#05284C] md:text-start md:text-[53.44px] md:w-[689px]">
            Growing Your Travel Business with PartnerPlus Pro
          </p>
          <p onClick={handleRegisterClick} className="text-[#999999] text-[16px] font-medium font-metro flex justify-center items-center gap-3 mb-[5rem] md:justify-start">
            {" "}
            <span>View Synopsis</span>{" "}
            <span className="mt-1">
              <FaArrowRight />
            </span>
          
          </p>
          {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          
        >
          <Synopsis closeModal={closeModal} handle={handleBackgroundClick} />
        </div>
      )}
        </div>
        <div className="absolute hidden bg-[#05284C] justify-center items-center rounded-2xl text-[23.14px] font-metro font-medium  text-white lg:flex flex-col p-[2rem]  md:top-[23rem] md:right-[26rem]">
          <span>
            <MdArrowOutward />
          </span>
          <span>Register</span>
        </div>
        <div className="absolute hidden   h-[4rem] w-[1rem] bg-[#05284C] rotate-45 md:top-[29.5rem] md:right-[35.7rem] lg:block"></div>
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
      <div className="absolute top-0 right-[6rem] hidden md:block">
        <img
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729545868/sinclair/Line_pattern_pcgsib.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Time;
