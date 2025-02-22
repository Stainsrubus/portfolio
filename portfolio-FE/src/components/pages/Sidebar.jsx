import React from "react";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { BiLogoLinkedin } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleEmail = () => {
    window.location.href = "mailto:stainsrubus@gmail.com";
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/stains-rubus/", "_blank");
  };

  const handleGitHub = () => {
    window.open("https://github.com/Stainsrubus/", "_blank");
  };

  return (
    <div className="absolute md:relative md:-top-80 -bottom-14   w-full flex md:block md:justify-start overflow-x-hidden justify-center md:items-start items-center  lg:left-5">
      <div className="flex lg:flex-col flex-row  items-center justify-center lg:items-center gap-4">
        <div className="lg:w-[0.5px] hidden  w-52 h-[0.5px] lg:h-52 bg-gradient-to-t from-transparent via-pink-500 to-transparent" />
        
        <div className="flex lg:flex-col lg:w-fit lg:left-5 lg:absolute w-full overflow-x-hidden flex-row text-tertiary gap-4">
          <div onClick={handleEmail} className="cursor-pointer ">
            <MdAlternateEmail
              className="bg-nav-gradient hover:bg-text-gradient p-2 rounded-full hover:scale-110 transition-all duration-300 text-white cursor-pointer"
              size={36}
            />
          </div>
          
          <div onClick={handleLinkedIn} className="hover:text-light_gray text-white cursor-pointer">
            <BiLogoLinkedin
              className="bg-nav-gradient hover:bg-text-gradient p-2 rounded-full hover:scale-110 transition-all duration-300 text-white cursor-pointer"
              size={36}
            />
          </div>
          
          <div onClick={handleGitHub} className="hover:text-light_gray text-white cursor-pointer">
            <IoLogoGithub
              className="bg-nav-gradient hover:bg-text-gradient p-2 rounded-full hover:scale-110 transition-all duration-300 text-white cursor-pointer"
              size={36}
            />
          </div>
        </div>
        
        <div className="lg:w-[0.5px] hidden  w-52 h-[0.5px] lg:h-52 bg-gradient-to-t from-transparent via-pink-500 to-transparent" />
      </div>
    </div>
  );
}

export default Sidebar;