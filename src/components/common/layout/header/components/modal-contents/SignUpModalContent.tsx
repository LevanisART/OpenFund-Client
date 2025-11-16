import { Button, Input, message } from "antd";
import { GoogleIcon24 } from "@/assets";
import { useAuthFormStore } from "@/store";
import { usePostSignupService, type SignupReqT } from "@/api";
import type { LoginModalContentT } from "./types";

const SignUpModalContent: React.FC<LoginModalContentT> = ({
  setIsLogin,
  handleCancel,
}) => {
  const { data, setData } = useAuthFormStore();
  const { mutate: signUp } = usePostSignupService();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSignUp = () => {
    signUp(data as SignupReqT, {
      onSuccess: () => {
        message.success("Signup successful!");
        setIsLogin(true);
      },
    });
  };

  const handleClose = () => {
    setData({
      email: "",
      password: "",
      userName: "",
    });
    handleCancel();
  };

  return (
    <div className="flex flex-col gap-8 items-center w-full">
      <p className="text-xl font-medium">Sign up</p>

      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-2">
          <p>Username:</p>
          <Input
            placeholder="Username"
            type="text"
            name="username"
            onChange={handleChange}
            value={data.userName}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Email:</p>
          <Input
            placeholder="Email"
            type="mail"
            name="email"
            onChange={handleChange}
            value={data.email}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Password:</p>
          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />
        </div>

        <div className="flex justify-end">
          <p
            className="text-blue-500 cursor-pointer hover:text-blue-400 duration-200"
            onClick={() => setIsLogin(true)}
          >
            Already Have Account?
          </p>
        </div>

        <Button className="text-lg" size="large">
          Sign up with Google{" "}
          <GoogleIcon24 className="ml-1 w-[20px] h-[20px]" />
        </Button>
      </div>

      <div className="flex justify-end gap-4 w-full">
        <Button size="large" onClick={handleClose}>
          Cancel
        </Button>
        <Button size="large" type="primary" onClick={handleSignUp}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default SignUpModalContent;
