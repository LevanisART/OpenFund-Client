import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getGoogleLinkController,
  postGoogleLoginController,
  postLoginController,
  postSignupController,
} from "../controllers";
import type {
  LoginErrorResT,
  LoginReqT,
  LoginResT,
  SignupReqT,
} from "../types";
import type { AxiosError } from "axios";

export const usePostLoginService = () => {
  const data = useMutation<LoginResT, AxiosError<LoginErrorResT>, LoginReqT>({
    mutationFn: (variables) => postLoginController(variables),
    mutationKey: ["useLoginService"],
  });

  return data;
};

export const usePostSignupService = () => {
  const data = useMutation({
    mutationFn: (variables: SignupReqT) => postSignupController(variables),
    mutationKey: ["useSignupService"],
  });

  return data;
};

export const useGetGoogleLinkService = () => {
  const data = useQuery({
    queryFn: getGoogleLinkController,
    queryKey: ["useGetGoogleLinkService"],
  });
  return data;
};

export const usePostGoogleLoginService = () => {
  const data = useMutation({
    mutationFn: (code: string) => postGoogleLoginController(code),
    mutationKey: ["usePostGoogleLoginService"],
  });

  return data;
};
