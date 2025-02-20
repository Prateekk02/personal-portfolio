import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/options";
import { fetchUserData, updateUserData } from "../lib/data";
import { redirect } from "next/navigation";
import { DashboardContent } from "../components";

async function Dashboard() {
  // Fetch session
  const session = await getServerSession(authOption);
  const username = session?.user?.username;

  // Redirect if user is not authenticated
  if (!username) {
    redirect("/login");
    return null;
  }

  // Update user data
  const handleFormSubmit = async (formData: FormData) => {
    "use server";

    const updates = {
      bio: formData.get("bio") as string | null,
      linkedin_id: formData.get("linkedin") as string | null,
      twitter_id: formData.get("twitter") as string | null,
      github_id: formData.get("github") as string | null,
      email_id: formData.get("email") as string | null,
      leetcode_id: formData.get("leetcode") as string | null,
    };

    const filteredUpdates = Object.fromEntries(
      Object.entries(updates).filter(([, v]) => v !== null)
    ) as Partial<{
      linkedin_id: string;
      twitter_id: string;
      github_id: string;
      email_id: string;
      bio: string;
      leetcode_id: string;
    }>;

    await updateUserData(session, username, filteredUpdates);
  };

  // Fetch user data
  const userData = await fetchUserData(username);

  // Ensure userData exists before destructuring
  if (!userData) {
    return (
      <div className="text-center text-red-500">
        Error: User data not found.
      </div>
    );
  }
 

  return (
    <DashboardContent initialUserData={userData} onSubmit={handleFormSubmit} />   
  );
}

export default Dashboard;
