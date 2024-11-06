import React from "react";
import logo from "assets/images/logo.png";
import { ILayoutProps } from "type";

const Layout: React.FC<ILayoutProps> = ({
  children,
  username,
  isAuthenticated,
  handleLogout,
}) => {
  return (
    <div className="w-[70%] mx-auto h-screen min-w-max overflow-y-scroll no-scrollbar">
      <div className="flex justify-between items-center">
        <div className="p-[42px] pr-[0px] flex items-center justify-center">
          <img
            src={logo}
            className="mr-[12px] w-[40px] h-[40px]"
            alt="Hero Icon"
          />
          <div className="text-[2em] font-bold">TODO</div>
        </div>

        {isAuthenticated && (
          <div className="flex items-center justify-center">
            <div className="text-xl pr-[42px] font-bold">{username}</div>
            <button
              onClick={() => {
                handleLogout();
                window.location.replace("http://localhost:3000/");
              }}
              className="rounded-2xl text-white bg-[#88ab33] px-4 py-2 shadow-md hover:text-[#88ab33] hover:bg-white transition duration-200 ease-in"
            >
              {"Logout"}
            </button>
          </div>
        )}
      </div>
      <div className="w-5/12 mx-auto min-w-max">{children}</div>
    </div>
  );
};

export default Layout;
