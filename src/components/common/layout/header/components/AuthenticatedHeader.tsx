import { useAuthStore } from "@/store";
import { Dropdown } from "antd";

const AuthenticatedHeader = () => {
  const { logout } = useAuthStore();
  return (
    <div>
      <Dropdown
        menu={{
          items: [
            {
              label: "Log out",
              key: "logout",
              onClick: () => logout(),
            },
          ],
        }}
      >
        <div className="w-10 h-10 rounded-full shadow-lg flex justify-center items-center border-2 border-blue-600">
          <p className="text-md font-bold">P</p>
        </div>
      </Dropdown>
    </div>
  );
};

export default AuthenticatedHeader;
