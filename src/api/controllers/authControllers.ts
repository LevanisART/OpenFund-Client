import axiosClient from "../axiosConfig";
import { endpoints } from "../endpoints";
import type { LoginReqT, LoginResT, SignupReqT } from "../types";

const { login, signup, getGoogle, postGoogle } = endpoints.auth;

export const postLoginController = async (
  data: LoginReqT
): Promise<LoginResT> => {
  const httpRes = await axiosClient.post(login, data);
  return httpRes.data;
};

export const postSignupController = async (data: SignupReqT): Promise<null> => {
  const httpRes = await axiosClient.post(signup, data);
  return httpRes.data;
};

export const getGoogleLinkController = async (): Promise<{ url: string }> => {
  const httpRes = await axiosClient.get(getGoogle);
  return httpRes.data;
};

export const postGoogleLoginController = async (
  code: string
): Promise<LoginResT> => {
  const httpRes = await axiosClient.post(postGoogle(code));
  return httpRes.data;
};
