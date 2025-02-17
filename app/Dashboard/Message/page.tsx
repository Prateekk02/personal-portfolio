import { MessageBox } from "@/app/components"

export default function Message(){
    return <>
        <main className="min-h-screen bg-gray-800">
            <h1 className="text-3xl flex justify-center text-white font-bold">Inbox</h1>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
            <MessageBox/>
        </main>
    </>
} 


