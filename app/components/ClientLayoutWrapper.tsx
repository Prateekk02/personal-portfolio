'use client'
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const ClientLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith("/Dashboard");    
    return <>
        {!isDashboard && 
            (<header className="w-full">
            <Header />
            </header>)
        }       
            {children}
        {!isDashboard && 
            (<footer className="w-full">
            <Footer />
            </footer>)
        }
    </>
}

export default ClientLayoutWrapper;