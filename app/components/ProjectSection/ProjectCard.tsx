
import { Meteors } from "../ui/meteors";
const ProjectCard = () => {
  return (
    <>
      <div className="rounded-2xl 
    shadow-lg 
    overflow-hidden 
    m-5 
    bg-gradient-to-tr 
    from-[#285161] 
    via-[#073c4d] 
    to-[#00214dac] 
    w-96 
    transition-transform 
    transform 
    hover:scale-105 
    hover:shadow-[0px_8px_20px_rgba(113,72,196,0.5)] 
    hover:translate-y-[-5px] 
    hover:bg-gradient-to-tr 
    hover:from-[#091c29] 
    hover:via-[#002437] 
    hover:to-[#061529] 
    hover:ring-[3px] 
    hover:ring-purple-500 
    duration-500 
    ease-in-out 
    cursor-pointer">
        
        <div className="p-5 m-2">
          <div className="font-bold text-2xl text-center mb-4 text-[#a1def7]">
            Project Title
          </div>
          <div className="text-lg text-justify text-[#a1def7] mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, sit?
            Inventore, voluptates! Et aut error totam earum sit quaerat dolorum!
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              #React
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              #TailwindCSS
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
              #JavaScript
            </span>
          </div>
          <div className="flex justify-between">
            <button className="bg-blue-500 text-purple-100 px-4 py-2 rounded-lg hover:bg-blue-600">
              View Details
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg animate-pulse hover:bg-green-600">
              Live
            </button>
          </div>
        </div>
        <Meteors number={10}/>
      </div>
      
    </>
  );
};

export default ProjectCard;
