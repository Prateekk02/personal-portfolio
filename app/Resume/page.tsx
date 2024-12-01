import { ResumeSection,ResumeHeader } from "../components"
// import { BackgroundBeams } from "../components/ui/background-beams"


export default function Resume(){

    
    return<>
        <div className="text-3xl h-screen bg-gray-300">
            <ResumeHeader />
            <ResumeSection />
            {/* <BackgroundBeams/> */}
        </div>
    </>
}