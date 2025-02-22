import React from 'react'
import { useSelector } from "react-redux";
import Marquee from "react-fast-marquee";

function Skills() {
  const { loading,portfolioData } = useSelector((state) => state.root);
  const skills = portfolioData?.skill || []; 
  
  if (loading) {
    return <Loader />;
  }
  if (!skills) {
    return <div>No skills data available</div>;
  }
  return (
    <div  id='skills' className="relative z-10 mt-32 flex flex-col justify-evenly border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-200 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center mt-24 lg:py-8">
        <div className="flex w-full items-center justify-center">
        <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  " />
          <div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent  bg-text-gradient px-5  -mr-2 ">SKILLS</h1>
          </div>
          <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent " />
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skills.map((skill, index) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={index}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skill.imgURL}
                      alt={skill.skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill.skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

       <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
    </div>
  );
};

export default  Skills
