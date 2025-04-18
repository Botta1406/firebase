import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";

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
                token.accessToken = account.access_token;
                token.email = profile.email as string;

                // Safe check for name
                if ('name' in profile) {
                    token.name = profile.name as string;
                } else if ('login' in profile) {
                    token.name = (profile as any).login;
                }

                // Safe check for image/avatar
                if ('picture' in profile) {
                    token.picture = (profile as any).picture;
                } else if ('avatar_url' in profile) {
                    token.picture = (profile as any).avatar_url;
                }
            }
            return token;
        },

        async session({ session, token }) {
            // Type assertion to avoid TS18048
            if (session.user) {
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
export { handler as GET, handler as POST };
