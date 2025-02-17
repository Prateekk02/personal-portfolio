'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Bell, MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  // Add shadow on scroll
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 right-0 left-0 
      bg-gray-300 border-b border-black
      transition-all duration-300
      ${scrolled ? 'shadow-md' : ''}
      lg:ml-2
    `}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Left section with page title */}
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-800">Edit Details</h1>
          </div>

          {/* Right section with navigation items */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => router.push('/Dashboard/Message')}
              className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-150"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Messages
            </button>
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition duration-150"
            >
              <Bell className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition duration-150"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-300 border-b border-black">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => router.push('/Dashboard/Message')}
                className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Messages
              </button>
              <button
                className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardHeader;