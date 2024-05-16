import { env } from "@/services/env/env";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
};
