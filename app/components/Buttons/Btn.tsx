export default function Btn({label}:{label: string}){
    const path:string = `/${label}.pdf`  
    return <>
        <div className="flex">
        <div className=" bg-[#1c515a]  text-white  text-xl py-2 px-5 rounded-full border cursor-pointer border-gray-600 hover:bg-black hover:border-purple-500 shadow-md transition-all duration-300 ease-in-out flex items-center space-x-2">
            <a href={path} download={`${label}.pdf`}>
                {label}
            </a>
        </div>
        </div>
    </>
}