// import SectionBtn from "./Buttons/SectionBtn";
import { Meteors } from "./ui/meteors";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import SocialMediaBar from "./Navbar/SocialMediaBar";


const words = ["Namaste", "Hello" , "Ciao","Hola", "Bonjour", "Hallo"]



export default function Homepage() {
    return (
        <>
            <div className="flex flex-wrap justify-center items-center min-h-screen mx-auto bg-[#070F2B] p-4">     
                          
                
                <div className="flex justify-center w-full md:w-auto mb-6 md:mb-0 md:outline md:outline-[#67b0cd] outline-none  rounded-full">
                   {/* <img src={"/prateekkumar.png"} alt="Prateek" className="bg-black rounded-full w-48 h-48 md:w-96 md:h-96" /> */}
                    
                    <Image
                        src="/prateekkumar2.png"
                        alt="Prateek"
                        className="rounded-full bg-black"
                        width={432}   // Adjusted to make the image smaller (can change based on your design needs)
                        height={432}  // Keep it proportional for a square image
                        quality={100} // Ensures the best quality
                        priority      // Loads immediately, avoiding blur
                        sizes="(max-width: 768px) 96px, (max-width: 1200px) 192px, 192px"
                    />
                    
                   
                </div>               
                
                <div className="flex flex-col items-center md:items-start w-full md:w-1/3 m-5">                   
                    
                    <div className="text-4xl md:text-7xl font-semibold px-5 pb-5 text-center md:text-left">
                        <FlipWords  words={words} />
                    </div>                    
                    
                    <div className="px-5 py-3">
                        <div className="text-[#a1def7] text-lg md:text-xl font-semibold">A bit about me</div>
                        <div className="text-[#a1def7] text-justify font-thin">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias earum veniam totam magnam voluptate, pariatur ducimus facilis, voluptas numquam sint explicabo aperiam expedita deserunt culpa assumenda porro placeat eum?
                        </div>
                    </div>
                    
                    <div className="w-full h-1 my-3 bg-gradient-to-r from-[#67b0cd] via-[#2ebae9] to-[#afcbf1] rounded"></div>

                    <div className="flex flex-wrap mt-3 justify-center md:justify-between w-full space-y-4 md:space-y-0">
                        {/* <SectionBtn label = "Resume" className="opacity-80 text-white bg-purple-600 rounded-full text-lg font-semibold w-32 h-32 md:w-36 md:h-36 flex justify-center items-center hover:bg-purple-300 duration-300 hover:ring hover:ring-purple-600 hover:opacity-100 hover:text-black"/> */}
                        {/* <SectionBtn label="Projects" className= "opacity-80 text-white bg-teal-600 rounded-full text-lg font-semibold w-32 h-32 md:w-36 md:h-36 flex justify-center items-center hover:bg-teal-300 duration-300 hover:ring hover:ring-teal-600 hover:opacity-100 hover:text-black"/> */}
                        {/* <SectionBtn label="Contact" className="opacity-80 text-white bg-blue-600 rounded-full text-lg font-semibold w-32 h-32 md:w-36 md:h-36 flex justify-center items-center hover:bg-blue-300 duration-300 hover:ring hover:ring-blue-600 hover:opacity-100 hover:text-black"/> */}
                        <SocialMediaBar />
                        
                    </div>
                    
                </div>

                <Meteors number={15} />
                
                
                
            </div>
        </>
    );
}
