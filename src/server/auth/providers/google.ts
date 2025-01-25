import Google, { type GoogleProfile } from "next-auth/providers/google";

const googleProvider = Google({
  allowDangerousEmailAccountLinking: true,
  profile: (profile: GoogleProfile) => ({
    id: profile.sub, // Ensure the 'id' (sub) is returned
    firstName: profile.given_name,
    lastName: profile.family_name,
    email: profile.email,
    image: profile.picture,
    username:
      `${profile.given_name}${profile.family_name}`.toLowerCase() ?? "unknown",
    name: profile.name,
  }),
});

export default googleProvider;
