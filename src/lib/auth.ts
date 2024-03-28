import GoogleProvider from "next-auth/providers/google"
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter"
import { db } from "./db"
import { NextAuthOptions } from "next-auth"
import { Adapter } from "next-auth/adapters"

export const authOptions: NextAuthOptions = {
    adapter: UpstashRedisAdapter(db) as Adapter,
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: '/login'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ]
}