'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    return (
        <>
            <div className="bg-slate-300">
                <header className="flex justify-between items-center mx-auto max-w-screen-lg p-4">
                    
                    <div className="flex items-center">
                        <div className="bg-purple-500 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer m-1 transition-transform duration-300 hover:scale-110">
                            
                        </div>
                        <div onClick={() => router.push('/')} className="font-bold text-3xl ml-4 cursor-pointer transition-transform duration-300 hover:scale-105">
                            Prateek Kumar
                        </div>
                        <div className="p-1 mt-2.5 text-sm cursor-pointer ml-2 text-gray-900 transition-transform duration-300 hover:scale-125">
                            Developer
                        </div>
                    </div>

                    
                    <div className="hidden md:flex items-center space-x-4">
                        <button onClick = {() => router.push('/Resume')} className="text-gray-900 cursor-pointer transition-all duration-300 hover:text-violet-500 font-semibold hover:scale-105">
                            Resume
                        </button>
                        <span className="text-gray-400">|</span>
                        <button onClick = {() => router.push('/Projects')} className="text-gray-900 cursor-pointer transition-all duration-300 hover:text-violet-500 font-semibold hover:scale-105">
                            Projects
                        </button>
                        <span className="text-gray-400">|</span>
                        <button onClick = {() => router.push('/Contact')} className="text-gray-900 cursor-pointer transition-all duration-300 hover:text-violet-500 font-semibold hover:scale-105">
                            Contact
                        </button>
                    </div>

                    
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-900 focus:outline-none transition-transform duration-300 hover:scale-110"
                        >
                            
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
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
                    <div className="md:hidden bg-black text-white font-semibold flex flex-col items-center space-y-4 py-4">
                        <div  className="cursor-pointer transition-all duration-300 hover:text-violet-500" onClick={() => setIsMenuOpen(false)}>
                            <button onClick = {() => router.push('/Resume')}>Resume</button>
                            
                        </div>
                        <div  className="cursor-pointer transition-all duration-300 hover:text-violet-500" onClick={() => setIsMenuOpen(false)}>
                            <button onClick = {() => router.push('/Projects')}>Projects</button>
                        </div>
                        <div  className="cursor-pointer transition-all duration-300 hover:text-violet-500" onClick={() => setIsMenuOpen(false)}>
                            <button onClick = {() => router.push('/Contact')}>Contact</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
