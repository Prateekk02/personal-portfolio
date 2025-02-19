import bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';

import { NextAuthOptions } from 'next-auth'; 
import prisma from '@/db';


export const authOption: NextAuthOptions =  {

    providers:[
        CredentialsProvider({
            id:'credentials',
            name:'Credentials',
            credentials:{
                username:{label:'email', type:'text', placeholder:'username'},
                password:{label:'password', type:'password', placeholder:"password"}
            },
            async authorize(credentials){
                try{
                    if(!credentials?.username || !credentials?.password){                         
                        throw new Error('Invalid Credentials')
                    }    
                    const user = await prisma.user.findUnique({
                        where:{
                            username: credentials.username
                        }
                    })  
                      
                    if(!user || !user.password){
                        throw new Error('User does not exist')
                    }    
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                    const role = user.role;    
                    if(!isPasswordCorrect){
                        throw new Error('Invalid Password.')
                    }
                    if(role !== "ADMIN"){
                        throw new Error("Not Authorized to login.")
                    }
                    return {
                        id:user.id.toString(),
                        username: user.username,
                        role: user.role

                    };
                }catch(error: unknown){
                    console.error(error)
                    throw error instanceof Error ? error: new Error("Something went wrong.")
                }                               
            }

        })
    ], 
 
    session:{
        strategy:"jwt"
    },
    jwt:{
        secret: process.env.NEXTAUTH_JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:'/login',
        signOut:'/',
        error:'/error'
         
    },
    callbacks: {
        async signIn({ user }) {
            if (user) {
                console.log(`User ${user.email} signed in successfully`);
                return true; 
            }
            console.error('Sign-in failed: Invalid user or credentials');
            return false;
        },
        async redirect({ url, baseUrl }) {
            
            if (url.startsWith(baseUrl)) return url;
            if (url.startsWith('/')) return new URL(url, baseUrl).toString();
            return baseUrl;
        },
        async session({session, token}){
            session.user.id = token.id as string
            session.user.username = token.username as string
            session.user.role = token.role as string   
            return session;
        },
        async jwt({token , user}){
            if(user){
                token.id = user.id?.toString() || ''
                token.role = user.role.toString() || ''
                token.username = user.username || ''
            }
            return token
        }
    }

} 

export  default authOption;