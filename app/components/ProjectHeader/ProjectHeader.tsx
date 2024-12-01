import ProjectBtn from "../Buttons/ProjectBtn";

export default function ResumeHeader() {
  return (
    <>
      {/* Resume Header (Fixed at the top) */}
      <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 ">
        <div className="flex gap-5 justify-center mx-auto max-screen-h p-4">
          <ProjectBtn label="All" />
          <ProjectBtn label="Full Stack Project" />
          <ProjectBtn label="Data Science Project" />
        </div>
      </div>

      {/* Main content with padding to ensure it doesn't get hidden by the fixed header */}
      <div className="pt-20">
        {/* Add your main content here */}
      </div>
    </>
  );
}
