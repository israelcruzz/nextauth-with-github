import { nextAuthConfig } from "@/lib/next-auth-option/next-auth-option";
import NextAuth from "next-auth";

export const handler = NextAuth(nextAuthConfig);

export { handler as GET, handler as POST };
