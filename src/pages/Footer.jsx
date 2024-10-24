import { CiYoutube } from "react-icons/ci"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FiFacebook, FiLinkedin } from "react-icons/fi"


const Footer = () => {
  return (
    <div className="bg-[#05284C] h-[349.08px] flex justify-between px-[5rem] items-center text-white">
        <div className="flex flex-col items-start">
            <img className="mb-5" src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729729440/sinclair/FT_logo_X5-02_getfer.png" alt="" />
            <p className="w-[415px] text-[16.8px] font-metro font-medium ">Finchglow Travels is the No.1 travel consolidator in Nigeria with 9 offices across Lagos, Abuja, Port Harcourt and Kano.</p>
        </div>
        <div>
            <h4 className="text-[16.8px] font-medium font-metro text-[ #98A2B3] mb-4 " >© 2024 Finchglow Travels. All rights reserved.</h4>
            <div className="flex gap-2 justify-end">
            <CiYoutube className="text-[#98A2B3]" />
            <FiFacebook />
            <FaXTwitter />
            <FiLinkedin />
            <FaInstagram />
            </div>

        </div>

    </div>
  )
}

export default Footer