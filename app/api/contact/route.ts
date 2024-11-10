import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { AxiosError } from "axios";

export async function POST(request:Request){
    try{
        const {firstName, lastName, email, subject, message} = await request.json();
    
        const user = await prisma.contact.create({
            data:{
                firstName,
                lastName,
                email,
                subject,
                message
            }
        }) 
        return NextResponse.json({
            message: "Message sent successfully.",
            user: user
        })
    }catch(e:unknown){
        if(e instanceof AxiosError){
            console.log('Axios error: ', e);
        }else{
            console.log('Unknown error occurred')
        }
        return NextResponse.json({
            error: "Something went wrong"
        },{
            status:500 
        })
    }
}