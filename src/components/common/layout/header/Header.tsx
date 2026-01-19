import { useEffect } from "react";
import AuthenticatedHeader from "./components/AuthenticatedHeader";
import UnauthenticatedHeader from "./components/UnauthenticatedHeader";
import { useAuthStore } from "@/store";
import "@/styles/main.scss";

const imgLogo = "/images/logo.png";

const Header = () => {
  const { isAuthenticated, init } = useAuthStore();

  useEffect(() => {
    init();
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo-section">
          <img src={imgLogo} alt="OpenFund" className="header__logo-img" />
        </div>

        {/* Right side */}
        <div className="header__actions">
          {/* Settings Icon */}
          <button className="header__settings-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.75137 18.75C10.9543 18.7501 12.145 18.5075 13.2531 18.0366C14.3612 17.5657 15.3642 16.8761 16.2028 16.0085C17.0414 15.1408 17.6986 14.1129 18.1355 12.9853C18.5724 11.8577 18.7802 10.6535 18.7465 9.44374C17.4881 10.325 15.9769 10.766 14.4451 10.6992C12.9133 10.6323 11.4457 10.0612 10.2679 9.07369C9.09007 8.08615 8.26718 6.73679 7.92568 5.233C7.58418 3.72921 7.74297 2.1542 8.37766 0.750031C6.13635 1.09752 4.10812 2.28364 2.69875 4.07107C1.28937 5.8585 0.602813 8.11542 0.776423 10.3903C0.950033 12.6651 1.97101 14.7901 3.63509 16.3401C5.29916 17.8902 7.48361 18.7509 9.75137 18.75Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          {/* Auth Buttons */}
          {isAuthenticated ? (
            <AuthenticatedHeader />
          ) : (
            <UnauthenticatedHeader />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
