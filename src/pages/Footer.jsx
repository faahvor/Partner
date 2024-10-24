import { CiYoutube } from "react-icons/ci"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FiFacebook, FiLinkedin } from "react-icons/fi"


const Footer = () => {
  return (
    <div className="bg-[#05284C]  flex flex-col p-[2rem] justify-between  items-center text-white lg:px-[5rem] lg:flex-row lg:h-[349.08px] ">
        <div className="flex flex-col items-center lg:items-start ">
            <img className="lg:mb-5 " src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729729440/sinclair/FT_logo_X5-02_getfer.png" alt="" />
            <p className=" text-[16.8px] text-center font-metro font-medium lg:text-start lg:w-[415px]">Finchglow Travels is the No.1 travel consolidator in Nigeria with 9 offices across Lagos, Abuja, Port Harcourt and Kano.</p>
        </div>
        <div>
            <h4 className="text-[16.8px] font-medium font-metro text-[ #98A2B3] mt-[2rem] mb-4 lg:mt-0 " >© 2024 Finchglow Travels. All rights reserved.</h4>
            <div className="flex gap-7 justify-center lg:justify-end lg:gap-2">
            <CiYoutube className="text-[20px]" />
            <FiFacebook className="text-[20px]" />
            <FaXTwitter className="text-[20px]" />
            <FiLinkedin className="text-[20px]"/>
            <FaInstagram className="text-[20px]"/>
            </div>

        </div>

    </div>
  )
}

export default Footer