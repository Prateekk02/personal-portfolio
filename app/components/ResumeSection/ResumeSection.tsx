import Divider from "../Divider"
import { Meteors } from "../ui/meteors"   
import { ResumeCardHeader, WorkCard, EducationCard } from "./ResumeCard"


export default function ResumeSection(){
    return <>
    
        <div className="text-white flex-gr min-h-screen mx-auto bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-4">
        <div className="lg:flex">
            <div >
                <ResumeCardHeader label="Work Experience" />
            </div>
            <div >
                {/* Database Call to get workcard details  */}
                <WorkCard organization="Google" role="SDE Intern" date="June-24 to Sept-24" techStack={["TypeScript", "JavaScript", "ReactJS", "Machine Learning"]}>
                    <ul className="list-disc">
                        <li >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum quasi voluptate esse hic exercitationem repellendus explicabo repudiandae dolore dolorem praesentium iusto, ducimus delectus non quam minus sint libero corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum quasi voluptate esse hic exercitationem repellendus explicabo repudiandae dolore dolorem praesentium iusto, ducimus delectus non quam minus sint libero corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum quasi voluptate esse hic exercitationem repellendus explicabo repudiandae dolore dolorem praesentium iusto, ducimus delectus non quam minus sint libero corporis?</li>
                    </ul>
                </WorkCard>
                <WorkCard organization="Google" role="SDE Intern" date="June-24 to Sept-24" techStack={["TypeScript", "JavaScript", "ReactJS", "Machine Learning"]}>
                    <ul className="list-disc">
                        <li >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum quasi voluptate esse hic exercitationem repellendus explicabo repudiandae dolore dolorem praesentium iusto, ducimus delectus non quam minus sint libero corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum quasi voluptate esse hic exercitationem repellendus explicabo repudiandae dolore dolorem praesentium iusto, ducimus delectus non quam minus sint libero corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum quasi voluptate esse hic exercitationem repellendus explicabo repudiandae dolore dolorem praesentium iusto, ducimus delectus non quam minus sint libero corporis?</li>
                    </ul>
                </WorkCard>
               
            </div>
        </div> 

        <Divider/>

        <div className="lg:flex">
            <div>
                <ResumeCardHeader label="Education" />
            </div>
            <div>
                <EducationCard organization="Lakshmi Narain College of Technology" specialization="B.Tech. in CSE " location="Bhopal" marks="8.63" date="July, 2021 to July, 2025" />               
            </div>
        </div>

            
        
                  
        <Meteors number={20}/>
        </div>
    </>
}