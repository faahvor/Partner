const Speaker = () => {
  return (
    <div className="grid grid-cols-1 h-full  bg-[#06396C] rounded-br-2xl relative pt-[5rem] text-white lg:h-[900px] lg:grid-cols-[50%,1fr]">
      <div>
        <img
          className=" h-[400px] rounded-full w-[400px] px-4 object-center mb-[6rem] lg:mb-0 lg:w-[662px]  lg:absolute lg:rounded-sm lg:bottom-0 lg:h-[800px]"
          src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729722786/sinclair/GMD_1_ztbxvv.png"
          alt=""
        />
      </div>
      <div className="pt-[20px] mx-4 z-30 lg:relative  ">
        <img className="ml-[6rem] absolute top-[32rem] left-[6rem] lg:top-[-3.6rem] z-10 lg:left-0" src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1729725167/sinclair/megaphone_1_xu9ija.png" alt="" />
        <button className="bg-[#E7A9A9]  absolute left-[6rem] z-20 h-[44.64px] w-[182.23px] text-black rounded-lg font-bold font-metro text-[18.14px] lg:left-0">Meet the Speaker</button>
        <h1 className="text-[66.47px] text-center font-semibold font-syne text-[#8CA3BB] mt-[2rem] lg:text-start">Bankole</h1>
        <h1 className="text-[66.47px] text-center font-semibold font-syne mt-[-2rem] md:text-start">Bernard</h1>
        <p className="text-[19.25px] text-center font-metro font-normal text-[#A9C4E3] lg:text-start ">Group Managing Director, Finchglow Holdings</p>
        <p className="text-[22.14px] text-center  font-metro font-normal lg:text-start  lg:h-[375px]">
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
