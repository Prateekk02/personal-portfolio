import React from 'react';
import Image from 'next/image';

interface SocialBtnProps {
  label: string;  // Label for the social media button
  svgFile?: string; // Path to the SVG file inside the public folder
  link?: string;    // The link to the social media profile or page
}

const SocialBtn: React.FC<SocialBtnProps> = ({ label, svgFile, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <div className="flex items-center justify-center">
        <div
          className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gray-800"
        >
          <Image
            src={`/images/${svgFile}`} 
            alt={label} 
            width={32} 
            height={32} 
            className="object-contain" 
          />
        </div>
      </div>
    </a>
  );
};

export default SocialBtn;
