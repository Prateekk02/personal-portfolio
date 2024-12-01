import Btn from "../Buttons/Btn";

export default function ResumeHeader(){
    return <>
        <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
            <div className="flex gap-5 justify-center items-center mx-auto max-w-screen-lg p-4">                
                <Btn label="SDE"/>
                <Btn label="Full Stack Developer"/>
                {/* <Btn label="Data Scientist"/>                 */}
            </div>
        </div>
    </>
} 