import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Find user by email
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
          select: {
            email: true,
            username: true,
            phone: true,
            password: true,
          },
        });

        if (!user) {
          throw new Error("User not found.");
        }

        // Compare the provided password with the hashed password in the database
        const isValidPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValidPassword) {
          throw new Error("Invalid credentials.");
        }

        // Return the user object if the password matches
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // If user is logged in, add user information to the token
      if (user) {
        token.username = user.username;
        token.phone = user.phone;
      }
      return token;
    },
    async session({ session, token }) {
      // Add username and phone to the session object
      session.user.username = token.username;
      session.user.phone = token.phone;
      return session;
    },
  },
});
