import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
};
