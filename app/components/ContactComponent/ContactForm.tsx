'use client'
import { useState } from "react";
import axios from "axios";
import { AxiosError } from "axios";



export default function ContactForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement> )=>{
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);        
        
        try{
            await axios.post('/api/contact', {
                firstName: firstName,
                lastName: lastName,
                email:email,
                subject: subject,
                message:message
            });
            setSuccess('Message send successfully');
            setFirstName('');
            setLastName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }catch(error:unknown){
            if(error instanceof AxiosError)
            {
                setError(error.response?.data?.error || error.message || 'Something went wrong');
            }else{
                setError("An unknown error occured.");
            }
        }finally{
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                    <label className="mb-1 text-sm font-semibold">First Name*</label>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="mb-1 text-sm font-semibold">Last Name*</label>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                    <label className="mb-1 text-sm font-semibold">Email*</label>
                    <input
                        type="email"
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="mb-1 text-sm font-semibold">Subject</label>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-col w-full">
                <label className="mb-1 text-sm font-semibold">Message</label>
                <textarea
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            {error && <p className="text-red-500">Something went wrong, please send your message again...</p>}
            {success && <p className="text-green-500 ">I have received your message, will contact you soon </p>}
            <button 
                type="submit" 
                className="w-full h-12 font-semibold text-lg rounded-full shadow-lg bg-green-500  
                        hover:bg-white  hover:ring-2 hover:ring-green-500 
                        transition-all duration-300 ease-in-out"
                disabled={loading}
                >
                {loading ? 'Submitting...': 'Submit'}
            </button>


        </form>
    );
}
