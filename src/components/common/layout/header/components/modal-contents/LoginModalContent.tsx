import { Button, Input, message } from "antd";
import type { LoginModalContentT } from "./types";
import { GoogleIcon24 } from "../../../../../../assets";
import { useAuthFormStore, useAuthStore } from "@/store";
import { usePostLoginService } from "@/api";

const LoginModalContent: React.FC<LoginModalContentT> = ({
  setIsLogin,
  handleCancel,
}) => {
  const { data, setData } = useAuthFormStore();
  const { mutate: loginHandler } = usePostLoginService();
  const { login } = useAuthStore();

  const handleClose = () => {
    setData({
      email: "",
      password: "",
      userName: "",
    });
    handleCancel();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = () => {
    loginHandler(
      {
        email: data.email ?? "",
        password: data.password ?? "",
      },
      {
        onSuccess: (res) => {
          message.success("Login successful!");
          login(res.data.accessToken);
          handleClose();
        },
        onError: (err) => {
          const errorRenrerer = () => {
            if (err.response?.data?.errors) {
              return Object.entries(err.response.data.errors).map(
                ([field, messages]) => (
                  <div key={field}>
                    <strong>{field}:</strong> {messages.join(", ")}
                  </div>
                )
              );
            }

            return "Login failed. Please try again.";
          };
          message.error(errorRenrerer());
        },
      }
    );
  };

  return (
    <div className="flex flex-col gap-8 items-center w-full">
      <p className="text-xl font-medium">Login</p>

      <div className="flex flex-col gap-3 w-full">
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
            onClick={() => setIsLogin(false)}
          >
            Dont Have Account?
          </p>
        </div>

        <Button className="text-lg" size="large">
          Sign in with Google{" "}
          <GoogleIcon24 className="ml-1 w-[20px] h-[20px]" />
        </Button>
      </div>

      <div className="flex justify-end gap-4 w-full">
        <Button size="large" onClick={handleClose}>
          Cancel
        </Button>
        <Button size="large" type="primary" onClick={handleLogin}>
          Log in
        </Button>
      </div>
    </div>
  );
};

export default LoginModalContent;
