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
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 text-transparent bg-clip-text drop-shadow-lg  ">
            {label}
          </h1>
        </div>
     
        
        </div>

    </>
} 

export const WorkCard = ({ organization, date, techStack, children, role }: ResumeCardProps) => {
  return (
    <>
    <div className="m-6 px-6 lg:px-10 py-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-lg rounded-lg">
      
      <div className="flex flex-wrap justify-between items-center border-b border-gray-700 pb-4 mb-4">
        <div className="px-6 pt-2">
          <div className="text-xl lg:text-2xl font-semibold text-purple-100">{organization}</div>
          <div className="text-sm lg:text-base text-purple-100">{role}</div>
        </div>
        <div className="text-sm lg:text-base text-purple-100">{date}</div>
      </div>

      
      <div className="px-6 pt-2 pb-3">
        <span className="font-bold text-sm lg:text-base text-purple-100">Tech Stack:</span>
        <ul className="ml-2 mt-2 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="space-y-3 bg-purple-100 text-purple-800 text-xs lg:text-sm font-medium px-3 py-1 rounded-lg shadow-sm hover:bg-purple-200 transition-all duration-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      
      <div className="text-md px-6 lg:text-lg text-purple-100 text-justify leading-loose">
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
    <div className="m-6 px-6 lg:px-10 py-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-sm rounded-lg">
      
      <div className="flex flex-wrap justify-between items-center gap-6 lg:gap-10 px-6 pb-4 border-b border-gray-700">
        <div className="text-lg lg:text-2xl font-semibold text-purple-100">
          {organization}
        </div>
        <div className="text-md lg:text-lg text-purple-100">
          {date}
        </div>
      </div>

      
      <div className="px-6 pt-4 space-y-3">
        <div className="text-purple-100 text-md lg:text-lg">
          <span className="font-semibold text-purple-100">Location:</span> {location}
        </div>

        <div className="text-purple-100 text-md lg:text-lg">
          <span className="font-semibold textpurple-100">Marks/GPA:</span> 
          <span className="bg-purple-100 text-purple-800 text-xs lg:text-sm font-medium px-3 py-1 rounded-lg ml-2 inline-block">
            {marks}
          </span>
        </div>

        <div className="text-purple-100 text-md lg:text-lg">
          <span className="font-semibold text-purple-100">Specialization:</span> {specialization}
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
    <div className="m-6 px-6 lg:px-10 py-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-sm rounded-lg">
      <div className="px-6 pb-4 border-b border-gray-700">
        <div className="text-lg lg:text-2xl font-semibold text-purple-100">
          {organization}
        </div>
      </div>

      <div className="px-6 pt-4 space-y-3">
        <div className="text-purple-100 text-md lg:text-lg">
          <span className="font-semibold text-purple-100">Description:</span> {content}
        </div>

        {link && (
          <div className="text-purple-100 text-md lg:text-lg">
            
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-100 font-bold hover:text-purple-500 duration-500"
            >
            <div className="flex gap-3 items-center">
              <div className="h-1 w-1 rounded-full animate-ping bg-purple-400"></div>
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
    <div className="m-6 px-6 lg:px-10 py-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-sm rounded-lg">
      <div className="px-6 pb-4 border-b border-gray-700">
        <div className="text-lg lg:text-2xl font-semibold text-white">
          {organization}
        </div>
      </div>

      <div className="px-6 pt-4 space-y-3">
        <div className="text-white text-md lg:text-lg">
          <span className="font-semibold text-white">Description:</span> {content}
        </div>

        {link && (
          <div className="text-white text-md lg:text-lg">            
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-100 font-bold hover:text-purple-500 duration-500"
            >
            <div className="flex gap-3 items-center">
              <div className="h-1 w-1 rounded-full animate-ping bg-purple-400"></div>
              <div className="">Link</div>              
            </div>  
            </a>
          </div>
        )}
      </div>
    </div>
  );
}