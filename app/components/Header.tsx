'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    return (
        <>
            <div className="bg-[#070F2B]">
                <header className="flex justify-between items-center mx-auto max-w-screen-lg p-4">
                    
                    <div className="flex items-center">
                        <button onClick={() => router.push('/Dashboard')} className="bg-gradient-to-r from-[#67b0cd] via-[#2ebae9] to-[#afcbf1] rounded-full h-6 w-6 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 animate-pulse">
                            
                        </button>
                        <div onClick={() => router.push('/')} className=" bg-gradient-to-r from-[#67b0cd] via-[#2ebae9] to-[#afcbf1] text-transparent bg-clip-text  font-sarif font-bold text-3xl ml-4 cursor-pointer transition-transform duration-300 hover:scale-105">
                            Prateek Kumar
                        </div>
                        
                    </div>

                    
                    <div className="hidden md:flex items-center space-x-4">
                        <button onClick = {() => router.push('/Resume')} className="bg-gradient-to-r from-[#67b0cd] via-[#2ebae9] to-[#afcbf1] text-transparent bg-clip-text cursor-pointer transition-all duration-300 hover:text-teal-200 font-semibold hover:scale-105">
                            Resume
                        </button>
                        <span className="text-gray-400">|</span>
                        <button onClick = {() => router.push('/Projects')} className="bg-gradient-to-r from-[#67b0cd] via-[#2ebae9] to-[#afcbf1] text-transparent bg-clip-text cursor-pointer transition-all duration-300 hover:text-teal-200 font-semibold hover:scale-105">
                            Projects
                        </button>
                        <span className="text-gray-400">|</span>
                        <button onClick = {() => router.push('/Contact')} className="bg-gradient-to-r from-[#67b0cd] via-[#2ebae9] to-[#afcbf1] text-transparent bg-clip-text cursor-pointer transition-all duration-300 hover:text-teal-200 font-semibold hover:scale-105">
                            Contact
                        </button>
                    </div>

                    
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#67b0cd] focus:outline-none transition-transform duration-300 hover:scale-110"
                        >
                            
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"                               
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </header>

                
                {isMenuOpen && (
                    <div className="md:hidden bg-[#070F2B]  font-semibold flex flex-col items-center space-y-4 py-4">
                        <div  className="bg-gradient-to-r from-[#67b0cd] via-[#2ebae9] to-[#afcbf1] text-transparent bg-clip-text cursor-pointer transition-all duration-300 hover:text-teal-300" onClick={() => setIsMenuOpen(false)}>
                            <button onClick = {() => router.push('/Resume')}>Resume</button>
                            
                        </div>
                        <div  className="bg-gradient-to-r from-[#67b0cd] via-[#2ebae9] to-[#afcbf1] text-transparent bg-clip-text cursor-pointer transition-all duration-300 hover:text-teal-300" onClick={() => setIsMenuOpen(false)}>
                            <button onClick = {() => router.push('/Projects')}>Projects</button>
                        </div>
                        <div  className="bg-gradient-to-r from-[#67b0cd] via-[#2ebae9] to-[#afcbf1] text-transparent bg-clip-text cursor-pointer transition-all duration-300 hover:text-teal-300" onClick={() => setIsMenuOpen(false)}>
                            <button onClick = {() => router.push('/Contact')}>Contact</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
