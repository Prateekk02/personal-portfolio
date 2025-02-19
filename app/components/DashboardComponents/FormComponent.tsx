"use client";
import { useState } from "react";

export default function FormComponent({ onSubmit }: { onSubmit: (formData: FormData) => void }) {
  const [formData, setFormData] = useState({
    bio: "",
    linkedin_id: "",
    twitter_id: "",
    github_id: "",
    email_id: "",
    leetcode_id: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData); // Send data to parent component (Dashboard)
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="linkedin_id" value={formData.linkedin_id} onChange={handleChange} placeholder="LinkedIn" />
      <input type="text" name="twitter_id" value={formData.twitter_id} onChange={handleChange} placeholder="Twitter" />
      <input type="text" name="github_id" value={formData.github_id} onChange={handleChange} placeholder="GitHub" />
      <input type="email" name="email_id" value={formData.email_id} onChange={handleChange} placeholder="Email" />
      <input type="text" name="leetcode_id" value={formData.leetcode_id} onChange={handleChange} placeholder="LeetCode" />
      <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio"></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Update</button>
    </form>
  );
}
