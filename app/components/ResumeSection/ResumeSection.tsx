import Divider from "../Divider"
import { Meteors } from "../ui/meteors"   
import { ResumeCardHeader, WorkCard, EducationCard, AchievementsCard, CertificateCard } from "./ResumeCard"


export default function ResumeSection(){
    return <>
    
        <div className="text-white flex-gr min-h-screen w-full mx-auto bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-4">
        <div className="lg:flex">
            <div className="w-1/4">
                <ResumeCardHeader label="Work Experience" />
            </div>
            <div className="w-3/4">
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
            <div className="w-1/4">
                <ResumeCardHeader label="Education" />
            </div>
            <div className="w-3/4">
                <EducationCard organization="Lakshmi Narain College of Technology" specialization="B.Tech. in CSE " location="Bhopal" marks="8.63" date="July, 2021 to July, 2025" />               
                <EducationCard organization="Lakshmi Narain College of Technology" specialization="B.Tech. in CSE " location="Bhopal" marks="8.63" date="July, 2021 to July, 2025" />               
                <EducationCard organization="Lakshmi Narain College of Technology" specialization="B.Tech. in CSE " location="Bhopal" marks="8.63" date="July, 2021 to July, 2025" />               
            </div>
        </div>
        <Divider />  

        <div className="lg:flex">
            <div className="w-1/4">
                <ResumeCardHeader label="Achievements" />
            </div>
            <div className=" w-3/4">
            <AchievementsCard organization="NPTEL" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, repudiandae!" link="google.com" />
            
            </div>
        </div>

        <Divider />

        <div className="lg:flex">
            <div className="w-1/4">
                <ResumeCardHeader label="Achievements" />
            </div>
            <div className=" w-3/4">
            <CertificateCard organization="NPTEL" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, repudiandae!" link="google.com" />
            
            </div>
        </div>

        <Meteors number={20}/>
        </div>
    </>
}