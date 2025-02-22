import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import Loader from '../../utils/loader'
import { useSelector } from "react-redux";
import herosvg from "../svg/section.svg";
import { Cursor, Typewriter } from "react-simple-typewriter";

function Home() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const homesData = portfolioData?.homes;

  if (loading) {
    return <Loader />;
  }
  if (!homesData) {
    return <div>No home data available</div>;
  }
  const { welcomeText, firstName, lastName, caption, description, imgURL } =
    homesData;
  return (
    <>
      <div id="home" className="flex  pt-52 w-full h-[84vh] items-center justify-center">
        <section className="relative  flex flex-col items-center justify-between  w-5/6">
          <img
            src={herosvg}
            alt="Hero"
            width={1572}
            height={795}
            className="absolute -top-[50px] md:-top-[190px]    -z-10"
          />

          <div className=" pt-32 grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
            <div className="order-2 lg:order-2 flex flex-col items-center justify-center p-2 pb-20 md:pb-10 lg:pt-10">
              <h1 className="lg:text-4xl text-center lg:text-left text-2xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                Hello, <br />
                {welcomeText} <span className=" text-rose-400">{firstName || ""} {lastName || ""} </span>
                {`,`}
                <br />
                {` I'm a `}
                <span className="text-green-500">
             <Typewriter
            
               words={description}
               loop
               typeSpeed={250}
               deleteSpeed={100}
             />
           </span>
           <span className="text-white dark:text-dark_primary">
             <Cursor cursorStyle="_" />
           </span>
              </h1>
              <p className="text-cyan-400 py-3 text-lg">
                {caption}
              </p>

              <div className="my-12 flex items-center gap-5">
                <Link
                  to="#"
                  target="_blank"
                  className="transition-all text-cyan-500 hover:scale-125 duration-300"
                >
                  <BsGithub size={30} />
                </Link>
                <Link
                  to="#"
                  target="_blank"
                  className="transition-all text-cyan-500 hover:scale-125 duration-300"
                >
                  <BsLinkedin size={30} />
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/#contact"
                  className="bg-nav-gradient p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
                >
                  <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                    <span>Contact me</span>
                    <RiContactsFill size={16} />
                  </button>
                </a>

                <Link
                  className="flex items-center gap-1 hover:gap-3 rounded-full bg-nav-gradient px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                  role="button"
                  target="_blank"
                  href="#"
                >
                  <span>Get Resume</span>
                  <MdDownload size={16} />
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
              <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
              </div>
              <div className="px-4 lg:px-8 py-5">
                <div className="flex flex-row space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                <code className="font-mono text-xs md:text-sm lg:text-base">
                  <div className="blink">
                    <span className="mr-2 text-blue-500">const</span>
                    <span className="mr-2 text-blue-300">coder</span>
                    <span className="mr-2 text-blue-500">=</span>
                    <span className="text-gray-400">{"{"}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-blue-300">
                      name:
                    </span>
                    <span className="text-gray-400">{`'`}</span>
                    <span className="text-amber-300">Stains Rubus</span>
                    <span className="text-gray-400">{`',`}</span>
                  </div>
                  <div className="ml-4 lg:ml-8 mr-2">
                    <span className=" text-blue-300">skills:</span>
                    <span className="text-gray-400">{`['`}</span>
                    <span className="text-amber-300">React</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Redux</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Express</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">NodeJS</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">MySql</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">MongoDB</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Tailwind CSS</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300 ">Bootstrap</span>
                    <span className="text-gray-400">{"'],"}</span>
                  </div>
                  <div className="ml-4 lg:ml-8 mr-2">
                    <span className=" text-blue-300">Languages</span>
                    <span className="text-gray-400">{`['`}</span>
                    <span className="text-amber-300">C</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">C++</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Javascript ES-6</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Python</span>
                    <span className="text-gray-400">{"'],"}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-blue-300">
                      fastLearner:
                    </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-blue-300">
                      dynamicThinker:
                    </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-blue-300">
                      problemSolver:
                    </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                      hireable:
                    </span>
                    <span className="text-orange-400">function</span>
                    <span className="text-gray-400">{"() {"}</span>
                  </div>
                  <div>
                    <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                      return
                    </span>
                    <span className="text-gray-400">{`(`}</span>
                  </div>
                  <div>
                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                    <span className="mr-2 text-blue-300">problemSolver</span>
                    <span className="text-amber-300">&amp;&amp;</span>
                  </div>
                  <div>
                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                    <span className="mr-2 text-blue-300">dynamicThinker</span>
                    <span className="text-amber-300">&amp;&amp;</span>
                  </div>
                  <div>
                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                    <span className="mr-2 text-blue-300">skills.length</span>
                    <span className="mr-2 text-amber-300">&gt;=</span>
                    <span className="text-orange-400">5</span>
                  </div>
                  <div>
                    <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">{`};`}</span>
                  </div>
                </code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
