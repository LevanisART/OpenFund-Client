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
        <div className="header__profile">
          <p className="header__profile-letter">P</p>
        </div>
      </Dropdown>
    </div>
  );
};

export default AuthenticatedHeader;
