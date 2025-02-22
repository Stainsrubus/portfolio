import React from "react";
import herosvg from "../svg/section.svg";
import Sidebar from "./Sidebar";
import { TbMailForward } from "react-icons/tb";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Contact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    setIsLoading(true);
    const serviceID = "service_2swz6tc";
    const templateID = "template_hxj6cst";
    const publicKey = "4neAUe9l0jy_Tyrus";

    try {
      const res = await emailjs.send(serviceID, templateID, input, publicKey);

      if (res.status === 200) {
        toast.success("Email sent successfully!");
        setInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send Email. Please try again.");
      console.log(error?.text || error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mt-48 md:mt-56">
        <div id="contact" className="relative">
          <img
            src={herosvg}
            alt="Hero"
            className="absolute left-0 lg:left-40 -z-10 w-full lg:w-auto"
          />
          <div className="flex justify-center -translate-y-[1px]">
            <div className="w-11/12 lg:w-3/4">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
            </div>
          </div>
          
          <div className="py-8 lg:py-20">
            <div className="flex justify-center mb-8 lg:mb-12">
              <div className="flex items-center">
                <span className="hidden sm:block w-16 lg:w-24 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                <h1 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-text-gradient px-3 lg:px-5">
                  Say Hello!
                </h1>
                <span className="hidden sm:block w-16 lg:w-24 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
              </div>
            </div>
          </div>

          <div className="flex justify-center px-4 lg:px-0">
            <div className="w-full max-w-xl lg:max-w-2xl">
              <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
                <div className="flex flex-row">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                </div>
                
                <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
                  <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
                    <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-500"></div>
                    <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
                    <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-400"></div>
                  </div>
                  <p className="text-center ml-3 text-[#16f2b3] text-sm lg:text-xl">
                    Get in Touch
                  </p>
                </div>

                <div className="overflow-hidden border-t-[1px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                  <form className="space-y-4 lg:space-y-6">
                    <div className="flex flex-col space-y-1 lg:space-y-2">
                      <label htmlFor="name" className="text-white text-sm lg:text-base">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required={true}
                        onBlur={checkRequired}
                        value={input.name}
                        onChange={(e) => setInput({ ...input, name: e.target.value })}
                        className="p-2 rounded bg-[#1b2c68a0] border border-[#1b2c68a0] text-white text-sm lg:text-base"
                      />
                    </div>
                    
                    <div className="flex flex-col space-y-1 lg:space-y-2">
                      <label htmlFor="email" className="text-white text-sm lg:text-base">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required={true}
                        value={input.email}
                        onChange={(e) => setInput({ ...input, email: e.target.value })}
                        onBlur={() => {
                          checkRequired();
                          setError({
                            ...error,
                            email: !isValidEmail(input.email),
                          });
                        }}
                        className="p-2 rounded bg-[#1b2c68a0] border border-[#1b2c68a0] text-white text-sm lg:text-base"
                      />
                      {error.email && (
                        <p className="text-xs lg:text-sm text-red-400">
                          Please provide a valid email!
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col space-y-1 lg:space-y-2">
                      <label htmlFor="message" className="text-white text-sm lg:text-base">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required={true}
                        onChange={(e) => setInput({ ...input, message: e.target.value })}
                        onBlur={checkRequired}
                        rows="4"
                        value={input.message}
                        className="p-2 rounded bg-[#1b2c68a0] border border-[#1b2c68a0] text-white text-sm lg:text-base"
                      ></textarea>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                      {error.required && (
                        <p className="text-xs lg:text-sm text-red-400">
                          Email and Message are required!
                        </p>
                      )}
                      <button
                        type="submit"
                        onClick={handleSendMail}
                        disabled={isLoading}
                        className={`w-full sm:w-1/2 flex items-center justify-center py-2 px-4 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-bold rounded text-sm lg:text-base ${
                          isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <AiOutlineLoading3Quarters className="animate-spin mr-2" size={18} />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Mail
                            <TbMailForward className="ml-2" size={18} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>

                <div className="flex flex-row">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Contact;