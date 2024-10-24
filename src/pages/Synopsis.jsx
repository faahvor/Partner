import { useState } from "react";
import Reserve from "./Reserve";


const Synopsis = ({handle}) => {
    const [showModal, setShowModal] = useState(false);

    const handleRegisterClick = (e) => {
      e.preventDefault()
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    const handleBackgroundClick = (e) => {
      e.preventDefault()
      setShowModal(false)
    };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={(e) => e.target === e.currentTarget && closeModal()}>
      <div className="bg-gradient-to-bl from-[#FFFFFF] to-[#FFEBEC] rounded-lg shadow-lg p-8 max-w-2xl w-full relative">
        <button
          onClick={handle}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-[2rem]"
        >
          &times;
        </button>
        <h2 className="text-sm font-semibold text-blue-600 mb-2">
          Partner Plus Connect Edition X
        </h2>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Synopsis: Growing Your Travel Business with PartnerPlus Pro
        </h1>
        <p className="text-gray-700 mb-6">
          In this edition of PartnerPlus Connect, Bankole Bernard, Group Managing Director and CEO of Finchglow Holdings Limited, will share expert insights on how to grow your travel business and unlock its full potential.
        </p>
        <div className="border-l-4 border-blue-500 pl-4 text-gray-600 mb-6">
          <p className="mb-2">
            He will showcase how Finchglow Travels’ innovative platform, PartnerPlus Pro, can be a key driver of business growth, through its automated processes, exclusive deals, and advanced analytics. But that’s not all - Bernard will also provide valuable tips and strategies on how to streamline bookings, enhance customer service, and boost revenue through effective cross-selling and upselling.
          </p>
          <p>
            Whether you’re looking to expand your market reach, increase efficiency, or simply drive profitability and business expansion, this webinar is for you. Join us to learn how to take your travel business to the next level!
          </p>
        </div>
        <a
          href="#"
          onClick={handleRegisterClick}
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          Register Now &rarr;
        </a>
        {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          
        >
          <Reserve closeModal={closeModal} handle={handleBackgroundClick} />
        </div>
      )}
      </div>
    </div>
  );
};

export default Synopsis;
