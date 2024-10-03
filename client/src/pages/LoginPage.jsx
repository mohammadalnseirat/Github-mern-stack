import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  // TODO ADD LOGIN FUNCTION
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto lg:py-0">
      <div className="w-full bg-glass rounded-lg shadow-md md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="capitalize text-xl font-bold md:text-3xl font-mono text-center">
            Login to your account
          </h1>
          <button
            className="text-gray-100 bg-[#24292f] hover:bg-[#24292f]/90 focus:ring-4 focus:ring-[#24292f]/50
          font-medium flex items-center justify-center w-full gap-2 p-2 rounded-lg"
          >
            <FaGithub className="w-6 h-6" />
            Login with Github
          </button>
          <p className="text-sm text-gray-300 font-[400] italic">
            {"Don't"} have an Account?{" "}
            <Link
              to={"/signup"}
              className="text-gray-100 font-semibold border border-gray-100 bg-gray-800 rounded px-2 py-1 "
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
