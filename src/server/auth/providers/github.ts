import GitHub, { type GitHubProfile } from "next-auth/providers/github";

const githubProvider = GitHub({
  allowDangerousEmailAccountLinking: true,
  profile: (profile: GitHubProfile) => {
    const name = profile.name?.split(" ");
    return {
      id: profile.id.toString(), // Ensure the 'id' is returned
      firstName: name?.[0] ?? "unknown",
      lastName: name?.[1],
      email: profile.email,
      image: profile.avatar_url,
      username: profile.login,
      name: profile.name,
    };
  },
});

export default githubProvider;
