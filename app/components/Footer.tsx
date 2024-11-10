export default function Footer() {
    
    return (
        <>
            <div className="bg-black">
                <footer className="flex flex-col md:flex-row bg-black h-28 rounded-t-2xl justify-around items-center  bottom-0 left-0 right-0 border-t-2 border-gray-700 max-w-screen mx-auto p-4">
                    <div className="flex flex-col items-center text-white">
                        <div className="font-bold text-lg">Phone</div>
                        <div 
                            className="text-gray-400 hover:text-white transition duration-200 cursor-pointer"
                            >+91 7898853505</div>
                    </div>
                    <div className="flex flex-col items-center text-white">
                        <div className="font-bold text-lg">Email</div>
                        <div className="text-gray-400 hover:text-white transition duration-200 cursor-pointer">prateekk02.kumar@gmail.com</div>
                    </div>
                    <div className="flex flex-col items-center text-white">
                        <div className="font-bold text-lg">Follow Me</div>
                        <div className="flex space-x-4 mt-1">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-200">LinkedIn</a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-200">GitHub</a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-200">Twitter</a>
                        </div>
                    </div>
                    <div className="text-center text-white mt-2 text-sm border-b border-gray-700 pt-2">
                        &copy; {new Date().getFullYear()} Prateek Kumar. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    );
}
