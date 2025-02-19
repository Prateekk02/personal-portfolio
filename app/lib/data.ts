import prisma from "@/db"
import {Session} from 'next-auth'


// Fetch data --> No authentication required
export const fetchUserData = async (username: string) =>{
    try{
        const user = await prisma.user.findUnique({
            where:{username},
            select:{
                bio:true,
                linkedin_id:true,
                email_id:true,
                twitter_id:true,
                github_id:true, 
                leetcode_id:true               
            }            
        })
        return user;
    }catch(error){
        console.log(error)
        throw new Error("Error while fetching user information from the database.")
    } 
} 

// Update data --> Authentication required
export const updateUserData = async (
    session:Session,
    username: string,
    updates: Partial<{ linkedin_id: string; twitter_id: string; github_id: string; email_id: string; bio: string; leetcode_id:string }> ) => 
    {
        if(!session || !session.user){
            throw new Error("Unauthorized")
        }

        if(session.user.username !== username && session.user.role !== "ADMIN"){
            throw new Error("Permission Denied")
        }

        try{
            const updateUser = await prisma.user.update({
                where:{username},
                data:updates
            })

            return updateUser;
        }catch(error){
            console.log(error)
            throw new Error("Error while updating user information.")
        }
} 