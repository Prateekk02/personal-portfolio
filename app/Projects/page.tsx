import { ProjectSection } from "../components"
import {Divider} from "../components"

export default function Projects(){
    return<>
        <div className="w-full min-h-screen mx-auto bg-[#070F2B] p-4">
            <ProjectSection label="Full Stack Projects"/>
            <Divider/> 
            <ProjectSection label="Data Science Projects"/>
            <Divider /> 
            <ProjectSection label="Python Projects"/>
        </div>
    </>
} 