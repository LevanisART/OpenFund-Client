import { useEffect } from "react";
import { Link } from "react-router-dom";
import AuthenticatedHeader from "./components/AuthenticatedHeader";
import UnauthenticatedHeader from "./components/UnauthenticatedHeader";
import { useAuthStore } from "@/store";

const Header = () => {
  const { isAuthenticated, init } = useAuthStore();

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <header className="w-full px-4 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-red-500 uppercase">
            OpenFund
          </h1>

          <div className="flex items-center gap-6">
            <Link to={"#"} className="text-lg font-medium">
              Link
            </Link>
            <Link to={"#"} className="text-lg font-medium">
              Link
            </Link>
            <Link to={"#"} className="text-lg font-medium">
              Link
            </Link>
          </div>

          {isAuthenticated ? (
            <AuthenticatedHeader />
          ) : (
            <UnauthenticatedHeader />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
