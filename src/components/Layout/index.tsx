import React, { ReactNode } from "react";
import logo from "assets/images/icon.png";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="w-[70%] mx-auto h-screen min-w-max overflow-y-scroll no-scrollbar">
      <div className="p-[42px] flex items-center">
        <img
          src={logo}
          className="mr-[12px] w-[40px] h-[40px]"
          alt="Hero Icon"
        />
        <div className="text-[2em] font-bold">TODO</div>
      </div>
      <div className="w-5/12 mx-auto min-w-max">{children}</div>
    </div>
  );
};

export default Layout;
