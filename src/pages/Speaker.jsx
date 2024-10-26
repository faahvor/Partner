const Speaker = () => {
  return (
    <div className="grid grid-cols-1 h-full  bg-[#06396C] rounded-br-2xl relative pt-[5rem] text-white lg:h-[900px] lg:grid-cols-[50%,1fr]">
      <div>
        <img
          className=" h-[200px] rounded-full w-[200px] px-4 object-center mx-auto mb-[2rem] lg:mb-0 lg:w-[662px]  lg:absolute lg:rounded-sm lg:bottom-0 lg:h-[800px]"
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729722786/sinclair/GMD_1_ztbxvv.png"
          alt=""
        />
      </div>
      <div className="pt-[20px] mx-4 z-30  lg:relative ">
        
        <img className="h-[4rem] ml-[6rem] absolute top-[17.7rem] left-[4rem] md:left-[22rem] lg:top-[-3.6rem] z-10 lg:left-0" src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729725167/sinclair/megaphone_1_xu9ija.png" alt="" />
        <div className="flex justify-center">
        <button className="bg-[#E7A9A9]  z-20 lg:h-[44.64px] h-[30.64px] w-[100.23px] lg:w-[182.23px] text-black rounded-lg font-bold font-metro text-[10px] lg:text-[18.14px] ">Meet the Speaker</button>
        </div>
        <h1 className="lg:text-[66.47px] text-[33.47px] text-center font-semibold font-syne text-[#8CA3BB]  lg:text-start">Bankole</h1>
        <h1 className="lg:text-[66.47px] text-[33.47px] text-center font-semibold font-syne mt-[-20px] lg:mt-[-2rem] lg:text-start">Bernard</h1>
        <p className="lg:text-[19.25px] text-[12.25px] text-center font-metro font-normal text-[#A9C4E3] lg:text-start ">Group Managing Director, Finchglow Holdings</p>
        <p className="lg:text-[22.14px] text-[11.14px] text-center  font-metro font-normal lg:text-start  lg:h-[375px] mb-10">
          Bankole Bernard is the Founder, Glg/CEO of Finchglow Holdings, a
          parent company of six leading travel and aviation industry players in
          Nigeria. With 18 years of leadership, he has modernized the downstream
          aviation sector through high-level partnerships, training, and
          capacity development. He has held various industry leadership  
          positions, including Chairman of APJC and President of AAATON and
          NANTA. He has received numerous awards for his impact, including Most
          Active Association President in West Africa and one of the 50 Most
          Impactful CEOs in Nigeria. He mentors aspiring aviation professionals
          and teaches business growth strategies.
        </p>
      </div>
    </div>
  );
};

export default Speaker;
