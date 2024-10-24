import React, { useState } from 'react';
import Reserve from './Reserve';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRegisterClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleBackgroundClick = (e) => {
    setShowModal(false)
  };

  return (
    <div className="bg-[#02172D] h-[91.51px] fixed w-full md:px-[5rem] flex flex-col justify-center z-50">
      <nav className="flex justify-between items-center">
        <div className="flex flex-col ml-[5rem] md:ml-0">
          <h1 className="flex">
            <span>
              <img src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729377152/sinclair/PartnerPlus_vwekx9.png" alt="Logo" />
            </span>
            <span className="ml-[-4px]">
              <img src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729376081/sinclair/Group_42_dov02o.png" alt="Logo Part 2" />
            </span>
          </h1>
          <p className="font-bold italic text-white font-com text-[18.21px]">
            A webinar series for travel agents
          </p>
        </div>
        <button
          className="md:w-[193px] md:h-[55px] hidden md:block text-white border-2 border-[#ffa5a5] bg-[#05284C] rounded-full"
          onClick={handleRegisterClick}
        >
          Register Now
        </button>
      </nav>
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          
        >
          <Reserve closeModal={closeModal} handle={handleBackgroundClick} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
