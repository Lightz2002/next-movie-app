import AppLogo from "./AppLogo";
import Profile from "./Profile";
import Searchbar from "./Searchbar";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 col-span-2 flex items-center bg-gray-900 sticky top-0 left-0 right-0 z-[999]">
      <AppLogo />
      <Searchbar />
      <Profile />
    </nav>
  );
};

export default Navbar;
