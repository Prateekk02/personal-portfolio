export default function ProjectBtn({label}:{label: string}){
    
    return <>
        <div className="flex">
        <div className="bg-black text-white  text-xl py-2 px-5 rounded-full border cursor-pointer  border-gray-600 hover:bg-gray-900 hover:border-purple-500 shadow-md transition-all duration-300 ease-in-out flex items-center space-x-2">
            {label}
        </div>
        </div>
    </>
}