import React from "react";
import Logo from "../assets/images/logo.png";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="md:grid md:grid-cols-6">
      <div className="min-h-[100vh] md:skew-x-[20deg] relative md:-left-52  bg-gradient-to-r from-primary to-accent max-lg:col-span-5 lg:col-span-4 flex justify-center items-center ">
        <div className="md:skew-x-[-20deg] relative md:left-24">
          <Outlet />
        </div>
      </div>
      <div className=" min-h-[100vh] select-none max-lg:relative max-lg:-left-24 flex items-center justify-start  lg:col-span-2 max-md:hidden">
        <img
          src={Logo}
          alt="Logo"
          className="h-[200px] lg:h-[250px] selection:disabled "
        />
      </div>
    </div>
  );
};

export default LoginLayout;
