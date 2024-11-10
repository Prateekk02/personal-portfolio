import { contactProps } from "@/app/Contact/page";

export default function ContactForm({ firstName, lastName, email, subject, message }: contactProps) {
    return (
        <form className="p-4 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full">
                    <label className="mb-1 text-sm font-semibold">First Name*</label>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        defaultValue={firstName}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="mb-1 text-sm font-semibold">Last Name*</label>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        defaultValue={lastName}
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
                        defaultValue={email}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="mb-1 text-sm font-semibold">Subject</label>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue={subject}
                    />
                </div>
            </div>

            <div className="flex flex-col w-full">
                <label className="mb-1 text-sm font-semibold">Message</label>
                <textarea
                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="5"
                    defaultValue={message}
                />
            </div>
            <button 
                type="submit" 
                className="w-full h-12 font-semibold text-lg rounded-full shadow-lg bg-green-500  
                        hover:bg-white  hover:ring-2 hover:ring-green-500 
                        transition-all duration-300 ease-in-out">
                Submit
            </button>


        </form>
    );
}
