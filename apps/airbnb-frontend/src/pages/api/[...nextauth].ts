import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';




import prisma from "@/libs/prismadb";

export const options : AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            // eslint-disable-next-line turbo/no-undeclared-env-vars
            clientId: process.env.GITHUB_ID as string,
            // eslint-disable-next-line turbo/no-undeclared-env-vars
            clientSecret: process.env.GITHUB_SEC as string,
            

        }),
        GoogleProvider({
            // eslint-disable-next-line turbo/no-undeclared-env-vars
            clientId: process.env.GOOGLE_ID as string,
            // eslint-disable-next-line turbo/no-undeclared-env-vars
            clientSecret: process.env.GOOGLE_SEC as string,

        }),
        CredentialsProvider({
             name: 'credentials',
                credentials: {
                email: { label: 'email', type: 'text'},
                password: { label: 'password', type: 'password'},
            },
            async authorize(credentials) {
                if(!credentials?.email || credentials?.password) {
                    throw new Error('Invalid credentials');

                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                        
                    }
                })

                if(!user || !user?.hashedPassword) {
                    throw new Error('Invalid credentials');
                }

                const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword);

                if(!isCorrectPassword) {
                    throw new Error('Invalid credentials');

                }

                return user;


            }
        })



    ],
    pages: {
        signIn: '/',
    },
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    secret: process.env.NEXTAUTH_SECRET,
    

}

export default NextAuth(options);