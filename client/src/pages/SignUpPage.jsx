import React from "react";
import { FaGithub, FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  // TODO ADD SIGN UP FUNCTION
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div className="bg-glass w-full rounded-lg shadow-md md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
          <h1 className="text-xl font-bold md:text-3xl text-center capitialize font-mono">
            Create Account
          </h1>
          <button className="text-gray-100 capitalize bg-[#24292f] hover:bg-[#24292f]/90 focus:ring-4 focus:ring-[#24292f]/50 font-medium rounded-lg  p-2 flex items-center gap-2 w-full justify-center text-center">
            <FaGithub className="w-6 h-6" />
            Sign up with Github
          </button>
          <p className="text-gray-300">
            By signing up, you will unlock all the features of the app.
            <span>
              <FaUnlockAlt className="w-4 h-4 inline-flex mx-2" />
            </span>
          </p>
          <p className="text-sm  text-gray-300 font-[400] italic">
            Already have an Account?{" "}
            <Link
              to="/login"
              className="text-gray-100 font-semibold border border-gray-100 bg-gray-800 rounded px-2 py-1 "
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
