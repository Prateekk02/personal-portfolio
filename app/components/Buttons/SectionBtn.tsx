'use client'
import { useRouter } from "next/navigation"


interface SectionBtnProps{
    label:string, 
    className:string
}

export default function SectionBtn({label,className}: SectionBtnProps){
    const router = useRouter();
    return<>
        <button onClick={() => router.push(`/${label}`)} className={className}>
            {label}
        </button> 
    </>
}