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
        
        <div className="border-t border-purple-400  flex-grow h-0.5 "></div>

        
        <div className="mx-4">
            <h1 className="text-bold text-4xl bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 text-transparent bg-clip-text ">{label}</h1>
        </div>

        
        <div className="border-t border-purple-400 flex-grow h-0.5"></div>
        </div>

    </>
} 

export const ResumeCard = ({organization, date, techStack, children, role}: ResumeCardProps) =>{
    return (
        <>
          <div className="m-6  px-32">
            <div className="flex flex-wrap justify-between items-center px-8 border-b border-purple-300 pb-4 mb-4">
              <div>
                <div className="text-lg font-semibold text-white">{organization}</div>
                <div className="text-sm text-white">{role}</div>
              </div>
              <div className="text-sm text-white">{date}</div>
            </div>
            <div className="px-8">
              <div className="mb-4">
                <span className="font-bold text-sm text-white">Tech Stack:</span>
                <ul className="ml-2 inline-flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-lg"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-sm text-white">{children}</div>
            </div>
          </div>
        </>
      );
      
}
