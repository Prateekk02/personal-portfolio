import { TextSlab } from "../components";
import { ContactForm } from "../components";
import { Meteors } from "../components/ui/meteors";

export default function Contact() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
            <Meteors number={20} />
            <div className="flex space-x-3 p-4  ">
                
                <div className=" p-4 rounded-md">
                    <TextSlab
                        title="Contact"
                        content="Excited to hear from you!"
                        titleClassName="text-5xl text-white font-bold py-2 px-1"
                        contentClassName="text-lg text-white font-thin py-1 px-2"
                    />
                    <TextSlab
                        title="Phone"
                        content="+91 7898853505"
                        titleClassName="font-bold text-white px-1.5"
                        contentClassName="text-sm text-white px-1.5"
                    />
                    <TextSlab
                        title="Email"
                        content="prateekk02.kumar@gmail.com"
                        titleClassName="font-bold text-white px-1.5"
                        contentClassName="text-sm text-white px-1.5"
                    />
                </div>

                
                <div className=" p-4 rounded-md ">
                   <ContactForm/>
                </div>
                
            </div>
            
        </div>
    );
}
