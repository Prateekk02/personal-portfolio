import { TitleHeader } from "../ResumeSection/ResumeCard";
import ProjectCardSection from "./ProjectCardSection";

interface ProjectSectionProps{
    label: string
}

const ProjectSection = ({label}:ProjectSectionProps) =>{
    return <>
        <header className="pb-3">
        <TitleHeader label={label} />
        </header>
        <ProjectCardSection />
        
    </>

   
} 

export default ProjectSection;