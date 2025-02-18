import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs';
import prisma from '@/db';

export async function POST(request: Request) {
    const { username, password } = await request.json();

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
        where: { username }
    });

    if (existingUser) {
        return NextResponse.json({ error: "Username already taken" }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
        data: {
            username ,
            password: hashedPassword,  
            role: "USER"          
        }
    });

    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
}
