import ProjectCard from "./ProjectCard";


const ProjectCardSection = () =>{
    // Database Call to get all the projects with respective label
    return <>
        <div className="flex justify-between flex-wrap w-full px-24 py-6 rounded-2xl  shadow-lg ">
        
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </>
} 

export default ProjectCardSection;