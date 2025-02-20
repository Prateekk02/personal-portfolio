"use client";
import { useState, useEffect } from "react";

interface FormComponentProps {
  onSubmit: (formData: FormData) => void;
  initialData?: {
    bio: string | null;
    linkedin: string | null;
    twitter: string | null;
    github: string | null;
    email: string | null;
    leetcode: string | null;
  };
}

export default function FormComponent({ onSubmit, initialData }: FormComponentProps) {
  const [formState, setFormState] = useState({
    bio: "",
    linkedin: "",
    twitter: "",
    github: "",
    email: "",
    leetcode: ""
  });
  
  const [modifiedFields, setModifiedFields] = useState<Set<string>>(new Set());
  const [isUploading, setIsUploading] = useState(false);

  // Initialize form with initial data if provided
  useEffect(() => {
    if (initialData) {
      setFormState({
        bio: initialData.bio ?? "",
        linkedin: initialData.linkedin ?? "",
        twitter: initialData.twitter ?? "",
        github: initialData.github ?? "",
        email: initialData.email ?? "",
        leetcode: initialData.leetcode ?? ""
      });
    }
  }, [initialData]);

  const handleChange = (field: string, value: string) => {
    setFormState(prev => ({
      ...prev,
      [field]: value
    }));
    setModifiedFields(prev => new Set(prev).add(field));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);
    
    const formData = new FormData();
    
    // Only append fields that were modified
    modifiedFields.forEach(field => {
      formData.append(field, formState[field as keyof typeof formState]);
    });

    onSubmit(formData);
    setModifiedFields(new Set()); // Reset modified fields after submission
    setIsUploading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="bio" className="text-sm font-medium text-gray-700">Bio:</label>
        <input
          type="text"
          id="bio"
          value={formState.bio}
          onChange={(e) => handleChange("bio", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your bio"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="linkedin" className="text-sm font-medium text-gray-700">LinkedIn:</label>
        <input
          type="text"
          id="linkedin"
          value={formState.linkedin}
          onChange={(e) => handleChange("linkedin", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your LinkedIn ID"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="twitter" className="text-sm font-medium text-gray-700">Twitter:</label>
        <input
          type="text"
          id="twitter"
          value={formState.twitter}
          onChange={(e) => handleChange("twitter", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your Twitter ID"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="github" className="text-sm font-medium text-gray-700">Github:</label>
        <input
          type="text"
          id="github"
          value={formState.github}
          onChange={(e) => handleChange("github", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your Github ID"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email:</label>
        <input
          type="text"
          id="email"
          value={formState.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your Email ID"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="leetcode" className="text-sm font-medium text-gray-700">Leetcode:</label>
        <input
          type="text"
          id="leetcode"
          value={formState.leetcode}
          onChange={(e) => handleChange("leetcode", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your Leetcode ID"
        />
      </div>

      <button 
        type="submit" 
        disabled={isUploading || modifiedFields.size === 0}
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition disabled:bg-blue-300"
      >
        {isUploading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}