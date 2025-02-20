"use client";
import { useState } from "react";
import   UserDetailComponent from "./UserDetailComponent";
import FormComponent from "./FormComponent";

// Create a wrapper client component to manage state
const DashboardContent = ({ 
  initialUserData, 
  onSubmit 
}: { 
  initialUserData: {
    bio: string | null;
    linkedin_id: string | null;
    twitter_id: string | null;
    github_id: string | null;
    email_id: string | null;
    leetcode_id: string | null;
  };
  onSubmit: (formData: FormData) => Promise<void>;
}) => {
  const [userData, setUserData] = useState(initialUserData);

  const handleFormSubmit = async (formData: FormData) => {
    // Call the server action
    await onSubmit(formData);
    
    // Update local state
    setUserData({
      bio: formData.get("bio") as string,
      linkedin_id: formData.get("linkedin") as string,
      twitter_id: formData.get("twitter") as string,
      github_id: formData.get("github") as string,
      email_id: formData.get("email") as string,
      leetcode_id: formData.get("leetcode") as string,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <UserDetailComponent
            bio={userData.bio}
            linkedin={userData.linkedin_id}
            twitter={userData.twitter_id}
            github={userData.github_id}
            email={userData.email_id}
            leetcode={userData.leetcode_id}
          />
        </div>
        <div>
          <FormComponent initialData={{
                bio: userData.bio,
                linkedin: userData.linkedin_id,
                twitter: userData.twitter_id,
                github: userData.github_id,
                email: userData.email_id,
                leetcode: userData.leetcode_id
  }} onSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;