export const endpoints = {
  auth: {
    login: "/auth/login",
    signup: "/auth",
    getGoogle: "/auth/google/link",
    postGoogle: (code: string) => `/auth/google/login?code=${code}`,
  },
};
