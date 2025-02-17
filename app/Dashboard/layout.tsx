'use client'
import { DashboardHeader } from "../components";
import { DashboardSidebar } from "../components";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-300">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="transition-all duration-300 lg:ml-2">
        
        <DashboardHeader />
        
        {/* Main Content with proper spacing */}
        <main className="pt-16 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}