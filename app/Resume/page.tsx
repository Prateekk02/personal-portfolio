import { ResumeSection,ResumeHeader } from "../components"
// import { BackgroundBeams } from "../components/ui/background-beams"


export default function Resume(){
    
    return<>
        <div className="flex flex-col min-h-screen bg-gray-300">
            <ResumeHeader />
            <ResumeSection />
            {/* <BackgroundBeams/> */}
        </div>
    </>
}