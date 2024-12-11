import { TextSlab } from "../components";
import { ContactForm } from "../components";
// import { BackgroundBeams } from "../components/ui/background-beams";

export default function Contact() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#070F2B]">
            
            <div className="flex space-x-3 p-4  ">
                
                <div className=" p-4 rounded-md">
                    <TextSlab
                        title="Contact"
                        content="Excited to hear from you!"
                        titleClassName="text-5xl text-[#a1def7] font-bold py-2 px-1 cursor-default"
                        contentClassName="text-lg text-[#a1def7] font-thin py-1 px-2 cursor-default"
                    />
                    <TextSlab
                        title="Phone"
                        content="+91 7898853505"
                        titleClassName="font-bold text-[#a1def7] px-1.5 cursor-default"
                        contentClassName="text-sm text-[#a1def7] px-1.5 cursor-default"
                    />
                    <TextSlab
                        title="Email"
                        content="prateekk02.kumar@gmail.com"
                        titleClassName="font-bold text-[#a1def7] px-1.5 cursor-default"
                        contentClassName="text-sm text-[#a1def7] px-1.5 cursor-default"
                    />
                </div>

                
                <div className=" p-4 rounded-md ">
                   <ContactForm/>
                </div>
                
            </div>
            
        </div>
    );
}
