import ProjectCard from './project-card';
import { useSelector } from "react-redux";
import Loader from '../../../utils/loader'
import herosvg from '../../svg/section.svg'
const Projects = () => {
  const { loading,portfolioData } = useSelector((state) => state.root);
  const project= portfolioData?.projects;

 if (loading) {
  return <Loader />;
}
if (!project) {
  return <div>No project data available</div>;
}
  return (
    <div id='projects' className="relative z-20 pt-32 top-10">
      <div className="sticky top-10">
      <div className="flex justify-center ">
        <div className="flex  items-center">
        <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent " />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent  bg-text-gradient px-5  -mr-2 ">PROJECTS</h1>
          <span className="w-24 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent " />
        </div>
      </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {project.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;