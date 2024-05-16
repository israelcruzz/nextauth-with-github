import { env } from "@/services/env/env";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: env.data?.GITHUB_ID as string,
      clientSecret: env.data?.GITHUB_SECRET as string,
    }),
  ],
};
