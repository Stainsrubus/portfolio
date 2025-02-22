import React from 'react';
import herosvg from "../svg/section.svg";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function Certifications() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const courses = portfolioData?.courses;

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!courses) {
    return <div>No certifications data available</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: dots => (
      <div>
        <ul className="flex justify-center mt-4 space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 mt-10 h-3 bg-gradient-conic rounded-full"></div>
    ),
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id='certifications' className="mt-32  h-[80vh] relative z-10 border-t my-12 lg:my-24 border-[#25213b]">
      <img
        src={herosvg}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute  top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px] ">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center mt-20 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-text-gradient px-5 -mr-2">Certifications</h1>
          <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-full max-w-2xl p-4">
          <Slider {...settings}>
            {courses.map((course, index) => (
              <div key={index} className="p-4">
                <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
                  <div className="flex flex-row">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                  </div>
                  <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
                    <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
                      <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
                      <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
                      {course.period}
                    </p>
                  </div>
                  <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                    <div className="flex justify-center">
                      <img src={`data:image/*;base64,${course.imgURL}`} alt={course.title} className="w-fit h-60 object-cover" />
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-bold text-[#16f2b3]">{course.title}</h2>
                      <p className="text-gray-300">{course.skillsgained}</p>
                      <p className="text-sm text-gray-400 mt-2">{course.certifiedby}</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
