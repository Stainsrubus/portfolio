import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../utils/glow-card";
import herosvg from "../svg/section.svg";
import blur from '../svg/blur.svg'
import { useSelector } from "react-redux";
import AnimationLottie from "../../utils/Animation";
import lottieFile from '../../assets/lottie/code.json'
function Education() {

  const { loading, portfolioData } = useSelector((state) => state.root);
  const educations = portfolioData?.education;
  
  if (loading) {
    return <Loader />;
  }
  if (!educations) {
    return <div>No education data available</div>;
  }
  return (
    <div id="education" className="mt-32 relative z-10 border-t  border-[#25213b]">
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

      <div className="flex justify-center mt-24  lg:py-8">
        <div className="flex  items-center">
        <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent " />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent  bg-text-gradient px-5  -mr-2 ">EDUCATION</h1>
          <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent " />
        </div>
      </div>
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="flex flex-col gap-6 w-5/6">
              {
                educations.map((education,index) => (
                  <GlowCard key={index} identifier={`${index}`}>
                    <div className="p-3 relative text-white">
                      <img
                        src={blur}
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.Year_of_Passing}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.Education}
                          </p>
                          <p className="text-sm sm:text-base">{education.Institute_Name}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;