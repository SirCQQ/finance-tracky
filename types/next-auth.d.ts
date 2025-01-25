/* eslint-disable @typescript-eslint/no-unused-vars */
import { JWT } from "next-auth/jwt";

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      email: string;
      emailVerified: Date;
      id: string;
      image: string;
      name: string;
      provider: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    provider?: string;
  }
}
