import SectionBtn from "./Buttons/SectionBtn";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Meteors } from "./ui/meteors";


const words = [
    {
        text:"Hello",
        className: "dark:text-black"
    },
    {
        text:"There!",
        className:"dark:text-purple-600"
    },
   
]
export default function Homepage() {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center min-h-screen mx-auto bg-slate-300 p-4">     
                          
                
                <div className="flex justify-center w-full md:w-auto mb-6 md:mb-0">
                    <div className="bg-black rounded-full w-48 h-48 md:w-96 md:h-96"></div>
                </div>               
                
                <div className="flex flex-col items-center md:items-start w-full md:w-1/3 m-5">                   
                    
                    <div className="text-4xl md:text-7xl font-semibold px-5 pb-5 text-center md:text-left">
                        <TypewriterEffect words={words} cursorClassName="bg-black"/>
                    </div>                    
                    
                    <div className="px-5 py-3">
                        <div className="text-lg md:text-xl font-semibold">A bit about me</div>
                        <div className="text-justify font-thin">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias earum veniam totam magnam voluptate, pariatur ducimus facilis, voluptas numquam sint explicabo aperiam expedita deserunt culpa assumenda porro placeat eum?
                        </div>
                    </div>
                    
                    
                    <div className="flex flex-wrap mt-3 justify-center md:justify-between w-full space-y-4 md:space-y-0">
                        <SectionBtn label = "Resume" className="bg-purple-600 rounded-full text-lg font-semibold w-32 h-32 md:w-36 md:h-36 flex justify-center items-center hover:bg-white duration-300 hover:ring hover:ring-purple-600"/>
                        <SectionBtn label="Projects" className= "bg-teal-600 rounded-full text-lg font-semibold w-32 h-32 md:w-36 md:h-36 flex justify-center items-center hover:bg-white duration-300 hover:ring hover:ring-teal-600"/>
                        <SectionBtn label="Contact" className="bg-blue-600 rounded-full text-lg font-semibold w-32 h-32 md:w-36 md:h-36 flex justify-center items-center hover:bg-white duration-300 hover:ring hover:ring-blue-600"/>
                        
                    </div>
                    
                </div>

                <Meteors number={10} />
                
                
            </div>
        </>
    );
}
