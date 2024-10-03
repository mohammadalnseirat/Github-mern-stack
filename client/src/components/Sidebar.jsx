import React from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { SiGnuprivacyguard } from "react-icons/si";
import LogOut from "./LogOut";

const Sidebar = () => {
  const authUser = true;
  return (
    <aside
      className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10
    hover:bg-gray-600/10 text-gray-100 border-r-gray-600"
    >
      <nav className="h-full flex flex-col items-center gap-4">
        <Link to={"/"} className="flex justify-center">
          <img src="/github.svg" className="h-8" alt="git-hub" />
        </Link>
        <Link
          to={"/"}
          className="p-1.5 transition-colors duration-150 rounded-lg hover:bg-gray-700"
        >
          <IoHomeSharp className="w-6 h-6" />
        </Link>
        {authUser && (
          <Link
            to={"/likes"}
            className="p-1.5 flex justify-center transition-colors duration-150 rounded-lg hover:bg-gray-700"
          >
            <FaHeart className="w-6 h-6" />
          </Link>
        )}
        {authUser && (
          <Link
            to={"/explore"}
            className="flex justify-center p-1.5 transition-colors duration-150 rounded-lg hover:bg-gray-700"
          >
            <MdOutlineExplore className="w-8 h-8" />
          </Link>
        )}
        {!authUser && (
          <Link
            to={"/login"}
            className="p-1.5 flex justify-center transition-colors duration-150 rounded-lg hover:bg-gray-700"
          >
            <PiSignInBold className="w-6 h-6" />
          </Link>
        )}
        {!authUser && (
          <Link
            to={"/signup"}
            className="p-1.5 flex justify-center transition-colors duration-150 rounded-lg hover:bg-gray-700"
          >
            <SiGnuprivacyguard className="w-6 h-6" />
          </Link>
        )}
        {
          authUser && (
            <div className="mt-auto flex flex-col gap-2 ">
              <LogOut/>

            </div>
          )
        }
      </nav>
    </aside>
  );
};

export default Sidebar;
