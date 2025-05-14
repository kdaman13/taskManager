import React from "react";
import UI_IMG from "../../assets/images/auth-img.png";

const AuthLayout = ({ children }) => {
  return <div className="flex">
      <div className="w-screen h-screen md:flex justify-center px-12 pt-8 pb-12">
        {children}
      </div>
    </div>
};

export default AuthLayout;
