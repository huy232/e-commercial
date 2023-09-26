import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import { Adapter } from "next-auth/adapters"
const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user }
		},

		async session({ session, token }) {
			session.user = token as any
			return session
		},
	},
	adapter: SupabaseAdapter({
		url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
		secret: process.env.SUPBASE_SERVICE_ROLE_KEY ?? "",
	}) as Adapter,
	// pages: {
	// 	signIn: "/login",
	// },
})

export { handler as GET, handler as POST }
