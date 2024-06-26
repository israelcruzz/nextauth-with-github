import { env } from "@/services/env/env";
import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: env.data?.GITHUB_ID as string,
      clientSecret: env.data?.GITHUB_SECRET as string,
      profile(profile: GithubProfile) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          githubProfile: profile,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.githubProfile = profile as GithubProfile;
      }

      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.user.githubProfile = token.githubProfile as GithubProfile;
      return session;
    },
  },
};
