import { ReactNode } from "react"


interface ResumeCardProps{
    organization: string,
    date: string,
    techStack: string[],
    children: ReactNode ,
    role : string
}

export const ResumeCardHeader = ({label}: {label:string} )=>{
    return <>
        <div className="flex items-center justify-between px-32 pt-10">
        
        <div className="border-t border-purple-400 flex-grow h-0.5 "></div>

        
        <div className="mx-4">
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg animate-pulse tracking-wide">
            {label}
          </h1>
        </div>
     
        <div className="border-t border-purple-400 flex-grow h-0.5"></div>
        </div>

    </>
} 

export const WorkCard = ({ organization, date, techStack, children, role }: ResumeCardProps) => {
  return (
    <div className="m-6 p-6 lg:px-10 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-lg rounded-lg">
      
      <div className="flex flex-wrap justify-between items-center border-b border-gray-700 pb-4 mb-4">
        <div>
          <div className="text-xl lg:text-2xl font-semibold text-gray-200">{organization}</div>
          <div className="text-sm lg:text-base text-gray-200">{role}</div>
        </div>
        <div className="text-sm lg:text-base text-gray-200">{date}</div>
      </div>

      
      <div className="mb-4">
        <span className="font-bold text-sm lg:text-base text-gray-200">Tech Stack:</span>
        <ul className="ml-2 mt-2 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="bg-purple-100 text-purple-800 text-xs lg:text-sm font-medium px-3 py-1 rounded-lg shadow-sm hover:bg-purple-200 transition-all duration-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      
      <div className="text-sm lg:text-base text-gray-200 leading-relaxed">
        {children}
      </div>
      
      
    </div>
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
    <div className="m-6 px-6 lg:px-10 py-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-sm rounded-lg">
      
      <div className="flex flex-wrap justify-between items-center gap-6 lg:gap-10 px-6 pb-4 border-b border-gray-700">
        <div className="text-lg lg:text-2xl font-semibold text-white">
          {organization}
        </div>
        <div className="text-sm lg:text-base text-white">
          {date}
        </div>
      </div>

      
      <div className="px-6 pt-4 space-y-3">
        <div className="text-white text-sm lg:text-base">
          <span className="font-semibold text-white">Location:</span> {location}
        </div>

        <div className="text-white text-sm lg:text-base">
          <span className="font-semibold text-white">Marks/GPA:</span> 
          <span className="bg-purple-100 text-purple-800 text-xs lg:text-sm font-medium px-3 py-1 rounded-lg ml-2 inline-block">
            {marks}
          </span>
        </div>

        <div className="text-white text-sm lg:text-base">
          <span className="font-semibold text-white">Specialization:</span> {specialization}
        </div>
      </div>

      
    </div>

  
  </>
}
