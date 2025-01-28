import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";

import { db } from "@/server/db";
import githubProvider from "./providers/github";
import googleProvider from "./providers/google";
import { User } from "@prisma/client";
/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: User & DefaultSession["user"];
  }
}
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    user: User;
    provider?: string;
  }
}

export const BASE_PATH = "/api/auth";

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig: NextAuthConfig = {
  session: {
    strategy: "jwt",
  },
  basePath: BASE_PATH,
  adapter: PrismaAdapter(db),
  providers: [
    githubProvider,
    googleProvider,

    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  callbacks: {
    async session({ session, user, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          ...token.user,
          provider: token?.provider,
        },
      };
    },

    async jwt({ token, user, account }) {
      if (user) {
        //@ts-ignore
        token = { ...token, user, provider: account?.provider };
      }

      return token;
    },
  },

  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
} satisfies NextAuthConfig;
