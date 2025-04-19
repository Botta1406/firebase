import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";

// NextAuth Options
export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account && profile) {
                // Type assertion and safe checks to avoid unknown type error
                token.accessToken = account.access_token as string;
                token.email = profile.email as string;

                // Safe check for profile name, ensuring it's a string
                token.name = ('name' in profile ? profile.name : (profile as any).login) as string;

                // Safe check for profile picture, ensuring it's a string
                token.picture = ('picture' in profile ? (profile as any).picture : (profile as any).avatar_url) as string;
            }
            return token;
        },

        async session({ session, token }) {
            if (session.user) {
                // Ensure that token values are assigned correctly
                session.user.email = token.email as string;
                session.user.name = token.name as string;
                session.user.image = token.picture as string;
            }

            // Optional: expose accessToken at session level
            (session as Session & { accessToken?: string }).accessToken = token.accessToken as string;

            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
};

const handler = NextAuth(authOptions);

// Export the handler for both GET and POST requests
export { handler as GET, handler as POST };
