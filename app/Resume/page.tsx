import { ResumeSection,ResumeHeader } from "../components"
// import { BackgroundBeams } from "../components/ui/background-beams"


export default function Resume(){
    
    return<>
        <div className="flex flex-col min-h-screen ">
            <ResumeHeader />
            <ResumeSection />
            {/* <BackgroundBeams/> */}
        </div>
    </>
}