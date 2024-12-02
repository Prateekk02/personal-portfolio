import SectionBtn from "./Buttons/SectionBtn";
import { Meteors } from "./ui/meteors";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
// import { BackgroundBeams } from "./ui/background-beams";

const words = ["Namaste", "Hello" , "Ciao","Hola", "Bonjour", "Hallo"]



export default function Homepage() {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center min-h-screen mx-auto bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-4">     
                          
                
                <div className="flex justify-center w-full md:w-auto mb-6 md:mb-0">
                    {/* <img src={"/prateekkumar.png"} alt="Prateek" className="bg-black rounded-full w-48 h-48 md:w-96 md:h-96" /> */}
                    

                <Image
                src="/prateekkumar.jpg"
                alt="Prateek"
                className="bg-black  rounded-full w-48 h-48 md:w-96 md:h-96"
                width={192}  // 48 * 4 (because w-48 means 12rem, and Image needs actual pixels)
                height={192} // 48 * 4 (same as width for a square image)
                sizes="(max-width: 768px) 96px, 192px"  // Optional for responsive image sizing
                />

                </div>               
                
                <div className="flex flex-col items-center md:items-start w-full md:w-1/3 m-5">                   
                    
                    <div className="text-4xl md:text-7xl font-semibold px-5 pb-5 text-center md:text-left">
                        <FlipWords words={words} />
                    </div>                    
                    
                    <div className="px-5 py-3">
                        <div className="text-gray-300 text-lg md:text-xl font-semibold">A bit about me</div>
                        <div className="text-gray-300 text-justify font-thin">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias earum veniam totam magnam voluptate, pariatur ducimus facilis, voluptas numquam sint explicabo aperiam expedita deserunt culpa assumenda porro placeat eum?
                        </div>
                    </div>
                    
                    
                    <div className="flex flex-wrap mt-3 justify-center md:justify-between w-full space-y-4 md:space-y-0">
                        <SectionBtn label = "Resume" className="opacity-80 text-white bg-purple-600 rounded-full text-lg font-semibold w-32 h-32 md:w-36 md:h-36 flex justify-center items-center hover:bg-purple-300 duration-300 hover:ring hover:ring-purple-600 hover:opacity-100 hover:text-black"/>
                        <SectionBtn label="Projects" className= "opacity-80 text-white bg-teal-600 rounded-full text-lg font-semibold w-32 h-32 md:w-36 md:h-36 flex justify-center items-center hover:bg-teal-300 duration-300 hover:ring hover:ring-teal-600 hover:opacity-100 hover:text-black"/>
                        <SectionBtn label="Contact" className="opacity-80 text-white bg-blue-600 rounded-full text-lg font-semibold w-32 h-32 md:w-36 md:h-36 flex justify-center items-center hover:bg-blue-300 duration-300 hover:ring hover:ring-blue-600 hover:opacity-100 hover:text-black"/>
                       
                        
                    </div>
                    
                </div>

                <Meteors number={15} />
                
                
                
            </div>
        </>
    );
}
