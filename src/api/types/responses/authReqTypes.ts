export interface LoginResT {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface LoginErrorResT {
  message: string;
  errors: Record<string, string[]>;
}
