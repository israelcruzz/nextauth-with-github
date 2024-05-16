import NextAuth from "next-auth";
import { GithubProfile } from "next-auth/providers/github";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      name: string;
      email: string;
      avatar: string;
      githubProfile: GithubProfile;
    };
  }

  interface JWT {
    githubProfile: GithubProfile;
  }
}
