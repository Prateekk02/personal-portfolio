import { ProjectSection } from "../components"
import {Divider} from "../components"

export default function Projects(){
    return<>
        <div className="w-full min-h-screen mx-auto bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-4">
            <ProjectSection label="Full Stack Projects"/>
            <Divider/> 
            <ProjectSection label="Data Science Projects"/>
            <Divider /> 
            <ProjectSection label="Python Projects"/>
        </div>
    </>
} 