'use client'
interface UserDetailComponentProps {
  bio: string | null, 
  linkedin: string | null,
  twitter: string | null,
  github: string | null,
  email: string | null,
  leetcode: string | null
}

const UserDetailComponent = ({ bio, linkedin, twitter, github, email, leetcode }: UserDetailComponentProps) => {
    
  return (      
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <p className="mb-2">
        <strong>Bio:</strong> {bio ?? "N/A"}
      </p>
      <p className="mb-2">
        <strong>LinkedIn:</strong>{" "}
        <a 
          href={linkedin ?? ""} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          {linkedin ?? "N/A"}
        </a>
      </p>
      <p className="mb-2">
        <strong>Twitter:</strong>{" "}
        <a 
          href={twitter ?? ""} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          {twitter ?? "N/A"}
        </a>
      </p>
      <p className="mb-2">
        <strong>GitHub:</strong>{" "}
        <a 
          href={github ?? ""} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          {github ?? "N/A"}
        </a>
      </p>
      <p className="mb-2">
        <strong>Email:</strong> {email ?? "N/A"}
      </p>
      <p className="mb-2">
        <strong>Leetcode:</strong>{" "}
        <a 
          href={leetcode ?? ""} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          {leetcode ?? "N/A"}
        </a>
      </p>
    </div>
  );
}

export default UserDetailComponent;
