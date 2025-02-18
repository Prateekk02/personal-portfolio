'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
    
        try {            
            const res = await signIn('credentials', {
                redirect: false,
                username,
                password,
                callbackUrl: '/Dashboard'
            });

            console.log("Result: ", res)

            if (res?.error) {
                if (res.error === "Not Authorized to login.") {                    
                    return router.push("/error");
                } else if (res.error === "User does not exist") {
                    setError("User does not exist");
                } else if (res.error === "Invalid Password.") {
                    setError("Invalid Password.");
                } else {
                    setError("Something went wrong. Please try again.");
                }
            } else if (res?.ok){
                router.push("/Dashboard");
                router.refresh();
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("An unexpected error occurred");
        }finally{            
            setLoading(false)
        }
    }   

    const handleSignup = () => {
        router.push("/signup");
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-400">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Admin Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={handleSignup}
                        className="w-full px-4 py-2 mt-2 font-bold text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
