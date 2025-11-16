import { Header } from "./header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
