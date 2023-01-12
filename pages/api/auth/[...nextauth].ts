import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import FacebookProvider from "next-auth/providers/facebook";

const autOptions: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: "/auth/sigin",
  },
};

export default NextAuth(autOptions);
