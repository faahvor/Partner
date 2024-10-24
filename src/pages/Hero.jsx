
const Hero = () => {
  return (
    <div className="relative h-full pt-[8rem] flex lg:flex-row flex-col justify-between bg-gradient-to-l from-[#F1BEC1]  via-[#EFDBDF] via-10% to-[#EDF2F8]  ">
        <div className="lg:w-[547px] lg:ml-[5rem] mb-[24rem] lg:mb-0">
        <div className="flex flex-col lg:items-start items-center">
            <h1 className="lg:text-[80.13px] text-[40px] text-center lg:text-start font-bold font-syne lg:leading-[84.98px] mb-4"><span className="text-[#52687E] ">Welcome to</span> <span className="text-[#05284C] ">PartnerPlus</span> <span className="text-[#EC6166] ">Connect</span>  </h1>
            <p className="lg:w-[474px] text-[24.16px] text-center lg:text-start text-[#021C36]   font-normal font-metro mb-4">The webinar series that empowers you with the knowledge and opportunities you need to thrive in the travel industry.</p>
            <div className="flex gap-2 items-center mb-4">
              <h1 className="text-[21.11px] font-metro font-semibold ">Powered by</h1> <img className="mt-[0.8rem]" src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729380800/sinclair/Component_1_pvxeab.png" alt="" />
            </div>
            <button className="w-[193px] h-[55px] bg-[#ED3237] text-white rounded-full mb-4">Register Now</button>
            <div className="flex flex-col justify-start items-center">
              <img src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729508985/sinclair/Frame_8_msmi4j.png" alt="" />
              <h1 className="text-[35.33px] font-bold font-metro"> <span className="text-[#ED3237]">200+</span>  people</h1> 
              <p className="text-[24.06px] font-normal font-metro">Already registered</p>
            </div>
        </div>
     
    </div>
    <div className="flex ">
      <img className="lg:h-[724px] lg:w-[517px] h-[400px]   lg:right-[20rem] right-[10rem] z-20  absolute bottom-0" src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729379219/sinclair/african-american-business-woman1_1_r61rmr.png" alt="" />
    <img className="lg:h-[633px] lg:w-[504px] h-[400px] right-0 absolute  bottom-0  z-10 " src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729379219/sinclair/african-american-business-woman22_1_qq28vq.png" alt="" /></div>
    </div>
  )
}

export default Hero