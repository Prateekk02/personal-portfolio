import { Meteors } from "../ui/meteors"   
import { ResumeCardHeader, ResumeCard } from "./ResumeCard"


export default function ResumeSection(){
    return <>
    
        <div className="text-white flex-gr min-h-screen mx-auto bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-4">
        <div className="lg:flex">
            <div className="">
                <ResumeCardHeader label="Work Experience" />
            </div>
            <div className="">
                <ResumeCard organization="Google" role="SDE Intern" date="June-24 to Sept-24" techStack={["TypeScript", "JavaScript", "ReactJS", "Machine Learning"]}>
                    <ul className="list-disc">
                        <li >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum quasi voluptate esse hic exercitationem repellendus explicabo repudiandae dolore dolorem praesentium iusto, ducimus delectus non quam minus sint libero corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum quasi voluptate esse hic exercitationem repellendus explicabo repudiandae dolore dolorem praesentium iusto, ducimus delectus non quam minus sint libero corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum quasi voluptate esse hic exercitationem repellendus explicabo repudiandae dolore dolorem praesentium iusto, ducimus delectus non quam minus sint libero corporis?</li>
                    </ul>
                </ResumeCard>
                <ResumeCard organization="Google" role="SDE Intern" date="June-24 to Sept-24" techStack={["TypeScript", "JavaScript", "ReactJS", "Machine Learning"]}>
                    <ul className="list-disc">
                        <li >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum quasi voluptate esse hic exercitationem repellendus explicabo repudiandae dolore dolorem praesentium iusto, ducimus delectus non quam minus sint libero corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum quasi voluptate esse hic exercitationem repellendus explicabo repudiandae dolore dolorem praesentium iusto, ducimus delectus non quam minus sint libero corporis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum quasi voluptate esse hic exercitationem repellendus explicabo repudiandae dolore dolorem praesentium iusto, ducimus delectus non quam minus sint libero corporis?</li>
                    </ul>
                </ResumeCard>
               
            </div>
        </div> 
        
                  
        <Meteors number={20}/>
        </div>
    </>
}