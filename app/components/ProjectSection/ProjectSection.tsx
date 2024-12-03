import { TitleHeader } from "../ResumeSection/ResumeCard";
import ProjectCardSection from "./ProjectCardSection";
interface ProjectSectionProps{
    label: string
}

const ProjectSection = ({label}:ProjectSectionProps) =>{
    return <>
        <TitleHeader label={label} />
        <ProjectCardSection />
    </>
} 

export default ProjectSection;