import React from 'react'
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return <>
   <div className=''>
            <div className="relative flex flex-col items-center my-20">
                <div className="absolute w-0.5 bg-gradient-to-t from-transparent via-violet-500 to-transparent h-full top-0 left-1/2 transform -translate-x-1/2" />
                <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center">
                    {/* #1 */}
                    <div className="flex justify-center w-full mb-10">
                        <div className="flex items-center space-x-4 border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] w-5/6 rounded-md p-4 relative">
                            <IoMdCall className="text-pink-600 hover:text-white bg-gradient-radial border border-white/20 to-amber-400 via-transparent from-pink-900 p-2 rounded-full hover:bg-text-gradient hover:scale-110 transition-all duration-300 cursor-pointer" size={36} />
                            <p className="text-amber-400 text-center hover:scale-110 transition-all duration-300">(+91) 9344676467</p>
                        </div>
                    </div>
                    {/* #2 */}
                    <div className="flex justify-center w-full mb-10">
                        <div className="flex items-center space-x-4 border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] w-5/6 rounded-md p-4 relative">
                            <MdAlternateEmail className="text-green-500 md:min-w-9 md:min-h-9 hover:text-white bg-gradient-radial border border-white/20 to-pink-500 via-transparent from-green-700 p-2 rounded-full hover:bg-text-gradient hover:scale-110 transition-all duration-300 cursor-pointer"  />
                            <p className="text-rose-500 text-center hover:scale-110 transition-all duration-300">stainsrubus@gmail.com</p>
                        </div>
                    </div>
                    {/* #3 */}
                    <div className="flex justify-center w-full mb-10">
                        <div className="flex items-center space-x-4 border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] w-5/6 rounded-md p-4 relative">
                            <FaLocationDot className="text-amber-500 hover:text-white bg-gradient-radial border border-white/20 to-green-400 via-transparent from-amber-600 p-2 rounded-full hover:bg-text-gradient hover:scale-110 transition-all duration-300 cursor-pointer" size={36} />
                            <p className="text-green-500 text-center hover:scale-110 transition-all duration-300">Tirunelveli, TamilNadu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
}

export default Footer
