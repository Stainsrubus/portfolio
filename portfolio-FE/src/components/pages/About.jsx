import React from "react";
import { useSelector } from "react-redux";
import herosvg from "../svg/section.svg";
import AnimationLottie from "../../utils/Animation";
import lottieFile from '../../assets/lottie/about.json'
function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const about = portfolioData?.abouts;
  const { description1, description2, skills, imgURL } = about || {};

  if (loading) {
    return <Loader />;
  }
  if (!about) {
    return <div>No about data available</div>;
  }
  return <>
 <div id="about" className="mt-48 relative z-10 border-t my-12 lg:my-24 border-[#25213b]">
      <img
        src={herosvg}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center mt-24 my-5 lg:py-8">
        <div className="flex  items-center">
        <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent " />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent  bg-text-gradient px-5  -mr-2 ">ABOUT ME</h1>
          <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent " />
        </div>
      </div>
      <div className="flex  flex-col md:flex-row lg:w-5/6 px-5 lg:px-0 gap-10 justify-center ">
      <div className="flex w-full md:w-[50%] justify-center items-center ">
            <div className="lg:w-full w-2/3 ">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>
          <div className=" w-full md:w-[50%] text-white gap-10 flex flex-col items-center justify-center">
            <p className="text-center text-sm md:text-lg">{description1}</p>
            <p className="text-center text-sm md:text-lg">{description2}</p>
          </div>
        
        
      </div>
      <div className="w-[100%] flex py-10 justify-center items-center">
      <div className="text-sm w-[50%] flex flex-col">
            {skills?.map((skill, index) => (
              <div key={index} className="flex items-center  gap-4">
                <p className="text-white min-w-20 ">{skill.name}</p>
                <div className="w-full " >
                <div className={`w-[${skill.percentage}%] bg-nav-gradient rounded-xl h-0.5`}/>
                </div>
                
              </div>
            ))}
          </div>
      </div>
      <div className="flex b w-full mb-10 justify-evenly mt-10">
        <div className="flex flex-col items-center hover:scale-125 transition duration-500">
            <h1 className="bg-clip-text text-transparent  bg-text-gradient text-4xl font-bold" >4+</h1>
            <p className="text-xs text-blue-200 font-outfit"> REACT PROJECTS</p>
        </div>
        <div className="bg-amber-600 w-0.5">
        </div>
        <div  className="flex flex-col items-center hover:scale-125 transition duration-500">
            <h1 className="bg-clip-text text-transparent  bg-text-gradient text-4xl font-bold">5+</h1>
            <p className="text-xs text-blue-200 font-outfit">MERN PROJECTS</p>
        </div>
        <div className="bg-amber-600 w-0.5"></div>
        <div  className="flex flex-col items-center hover:scale-125 transition duration-500">
            <h1 className="bg-clip-text text-transparent  bg-text-gradient text-4xl font-bold">3+</h1>
            <p className="text-xs text-blue-200 font-outfit">NODE PROJECTS</p>
        </div>
      </div>
    </div>
  </>
}

export default About;
