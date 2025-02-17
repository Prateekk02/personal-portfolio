'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

function DashboardSidebar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const navigationItems = [
        { title: 'Profile', route: '/Dashboard' },
        { title: 'Experience', route: '/Dashboard/EditExperience' },
        { title: 'Projects', route: '/Dashboard/EditProjects' }
    ];

    return (
        <div className="fixed top-0 left-0 h-screen z-10">
            <div 
                className="absolute top-0 left-0 w-2 h-screen bg-transparent"
                onMouseEnter={() => setIsHovered(true)}
            />

            <div className="min-h-screen">
                <div className="lg:hidden p-4 absolute z-50">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-md text-gray-700 bg-white/80 backdrop-blur-sm hover:bg-white/90"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div 
                    className={`
                        w-64 min-h-screen 
                        bg-gray-300/70 backdrop-blur-md
                        border-r border-black/20
                        shadow-lg
                        transition-all duration-300 ease-in-out
                        ${!isHovered && !isOpen ? '-translate-x-full' : 'translate-x-0'}
                        ${isOpen ? 'block' : 'hidden'} lg:block
                    `}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="p-6 flex flex-col items-center">
                        <div className="text-6xl font-bold text-black/80 mb-4 backdrop-blur-sm">P</div>
                        
                        <button
                            onClick={() => router.push("/")}
                            className="w-full px-4 py-2 text-gray-800 rounded-md 
                                     bg-white/50 backdrop-blur-sm
                                     hover:bg-white/70 transition-colors mb-8"
                        >
                            Main Page
                        </button>

                        <div className="w-full space-y-2">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.title}
                                    onClick={() => router.push(item.route)}
                                    className="w-full px-4 py-2 text-left text-gray-800 rounded-md 
                                             bg-white/50 backdrop-blur-sm
                                             hover:bg-white/70 transition-colors"
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardSidebar;