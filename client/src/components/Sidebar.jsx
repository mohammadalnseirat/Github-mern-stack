import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { SiGnuprivacyguard } from "react-icons/si";
import LogOut from "./LogOut";
import { useAuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  // correct data:
  const { authUser } = useAuthContext();
  return (
    <aside
      className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10
    hover:bg-gray-600/10 text-gray-100 border-r-gray-600"
    >
      <nav className="h-full flex flex-col items-center gap-4">
        <Link to={"/"} className="flex justify-center">
          <img src="/github.svg" title="Home" className="h-8" alt="git-hub" />
        </Link>
        <Link
          to={"/"}
          className={`p-1.5 transition-colors duration-150 rounded-lg hover:bg-gray-700 ${
            path === "/" ? "bg-gray-700" : ""
          }`}
        >
          <IoHomeSharp
            title="Home"
            className={`w-6 h-6 ${path === "/" ? "text-purple-500" : ""}`}
          />
        </Link>
        {authUser && (
          <Link
            to={"/likes"}
            className={`p-1.5 flex justify-center transition-colors duration-150 rounded-lg hover:bg-gray-700 ${
              path === "/likes" ? "bg-gray-700" : ""
            }`}
          >
            <FaHeart
              title="Likes"
              className={`w-6 h-6 ${path === "/likes" ? "text-red-500" : ""}`}
            />
          </Link>
        )}
        {authUser && (
          <Link
            to={"/explore"}
            className={`flex justify-center p-1.5 transition-colors duration-150 rounded-lg hover:bg-gray-700 ${
              path === "/explore" ? "bg-gray-700" : ""
            }`}
          >
            <MdOutlineExplore
              title="Explore"
              className={`w-8 h-8 ${
                path === "/explore" ? "text-blue-400" : ""
              }`}
            />
          </Link>
        )}
        {!authUser && (
          <Link
            to={"/login"}
            className="p-1.5 flex justify-center transition-colors duration-150 rounded-lg hover:bg-gray-700"
          >
            <PiSignInBold title="Sign In" className="w-6 h-6" />
          </Link>
        )}
        {!authUser && (
          <Link
            to={"/signup"}
            className="p-1.5 flex justify-center transition-colors duration-150 rounded-lg hover:bg-gray-700"
          >
            <SiGnuprivacyguard title="Sign Up" className="w-6 h-6" />
          </Link>
        )}
        {authUser && (
          <div className="flex flex-col gap-2 mt-auto">
            <LogOut />
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
