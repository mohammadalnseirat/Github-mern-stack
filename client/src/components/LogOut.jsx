import React from "react";
import { MdLogout } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const LogOut = () => {
  const { authUser, setAuthUser } = useAuthContext();
  //TODO ADD LOGOUT FUNCTION
  const handleLogOut = async () => {
    try {
      const res = await fetch("/api/v1/auth/logout", {
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        setAuthUser(null);
        toast.success("Logged out successfully!");
      }
    } catch (error) {
      toast.error("error while logging out!");
    }
  };
  return (
    <>
      <img
        src={authUser?.avatarUrl}
        alt="profile-picture"
        className="w-10 h-10 rounded-full border border-gray-700 cursor-pointer"
      />
      <div
        onClick={handleLogOut}
        className="flex items-center justify-center cursor-pointer p-2 bg-glass rounded-lg mt-auto border border-gray-700"
      >
        <MdLogout title="Logout" className="w-6 h-6" />
      </div>
    </>
  );
};

export default LogOut;
