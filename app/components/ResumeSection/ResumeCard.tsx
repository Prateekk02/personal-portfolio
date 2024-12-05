import { ReactNode } from "react"



interface ResumeCardProps{
    organization: string,
    date: string,
    techStack: string[],
    children: ReactNode ,
    role : string
}

export const TitleHeader = ({label}: {label:string} )=>{
    return <>
        <div className="flex items-center justify-between w-full pt-10">
        <div className="mx-4">
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#67b0cd] via-[#2ebae9] to-[#afcbf1] text-transparent bg-clip-text drop-shadow-lg  ">
            {label}
          </h1>
        </div>
     
        
        </div>

    </>
} 

export const WorkCard = ({ organization, date, techStack, children, role }: ResumeCardProps) => {
  return (
    <>
    <div className="m-6 px-6 lg:px-10 py-6   shadow-lg rounded-lg">
      
      <div className="flex flex-wrap justify-between items-center border-b border-gray-700 pb-4 mb-4">
        <div className="px-6 pt-2">
          <div className="text-xl lg:text-2xl font-bold text-[#a1def7]">{organization}</div>
          <div className="text-sm lg:text-base text-[#a1def7]">{role}</div>
        </div>
        <div className="text-sm lg:text-base text-[#a1def7]">{date}</div>
      </div>

      
      <div className="px-6 pt-2 pb-3">
        <span className="font-bold text-sm lg:text-base text-[#a1def7]">Tech Stack:</span>
        <ul className="ml-2 mt-2 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="space-y-3 bg-teal-800 text-[#a1def7] text-xs lg:text-sm font-medium px-3 py-1 rounded-lg shadow-sm hover:bg-black hover:ring-purple-600 transition-all duration-300 cursor-default"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      
      <div className="text-md px-6 lg:text-lg text-[#a1def7] text-justify leading-loose">
        {children}
      </div>
      
    
    </div>
    </>
  );
};


interface EducationCardProps{
  organization: string,
  date : string,  
  location: string,
  specialization: string,
  marks:string
}

export const EducationCard = ({organization,date,location, marks ,specialization}: EducationCardProps) =>{
  return <>
    <div className="m-6 px-6 lg:px-10 py-6  shadow-sm rounded-lg">
      
      <div className="flex flex-wrap justify-between items-center gap-6 lg:gap-10 px-6 pb-4 border-b border-gray-700">
        <div className="text-lg lg:text-2xl font-semibold text-[#a1def7]">
          {organization}
        </div>
        <div className="text-md lg:text-lg text-[#a1def7]">
          {date}
        </div>
      </div>

      
      <div className="px-6 pt-4 space-y-3">
        <div className="text-[#a1def7] text-md lg:text-lg">
          <span className="font-semibold text-[#a1def7]">Location:</span> {location}
        </div>

        <div className="text-[#a1def7] text-md lg:text-lg">
          <span className="font-semibold textpurple-100">Marks/GPA:</span> 
          <span className="bg-teal-600 text-white animate-pulse text-xs lg:text-sm font-medium px-3 py-1 rounded-lg ml-2 inline-block">
            {marks}
          </span>
        </div>

        <div className="text-[#a1def7] text-md lg:text-lg">
          <span className="font-semibold text-[#a1def7]">Specialization:</span> {specialization}
        </div>
      </div>
      
    </div>
  </>
}

interface AchievementsProps {
  content: string,
  link?: string,
  organization: string
}

export const AchievementsCard = ({ organization, content, link }: AchievementsProps) => {
  return (
    <div className="m-6 px-6 lg:px-10 py-6 shadow-sm rounded-lg">
      <div className="px-6 pb-4 border-b border-gray-700">
        <div className="text-lg lg:text-2xl font-semibold text-[#a1def7]">
          {organization}
        </div>
      </div>

      <div className="px-6 pt-4 space-y-3">
        <div className="text-[#a1def7] text-md lg:text-lg">
          <span className="font-semibold text-[#a1def7]">Description:</span> {content}
        </div>

        {link && (
          <div className="text-[#a1def7] text-md lg:text-lg">
            
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1def7] font-bold hover:text-purple-500 duration-500"
            >
            <div className="flex gap-3 items-center">
              <div className="h-1 w-1 rounded-full animate-ping bg-green-500"></div>
              <div className="">Link</div>              
            </div>  
            </a>
          </div>
        )}
        
      </div>
    </div>
  );
};

interface CertificateCardProps {
  content: string,
  link?: string,
  organization: string
}

export const CertificateCard = ({content,link,organization}:CertificateCardProps) =>{
  return (
    <div className="m-6 px-6 lg:px-10 py-6  shadow-sm rounded-lg">
      <div className="px-6 pb-4 border-b border-gray-700">
        <div className="text-lg lg:text-2xl font-semibold text-[#a1def7]">
          {organization}
        </div>
      </div>

      <div className="px-6 pt-4 space-y-3">
        <div className="text-[#a1def7] text-md lg:text-lg">
          <span className="font-semibold text-[#a1def7]">Description:</span> {content}
        </div>

        {link && (
          <div className="text-[#a1def7] text-md lg:text-lg">            
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a1def7] font-bold hover:text-purple-500 duration-500"
            >
            <div className="flex gap-3 items-center">
              <div className="h-1 w-1 rounded-full animate-ping bg-green-500"></div>
              <div className="">Link</div>              
            </div>  
            </a>
          </div>
        )}
      </div>
    </div>
  );
}