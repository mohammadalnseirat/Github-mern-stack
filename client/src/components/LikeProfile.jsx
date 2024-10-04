import React from "react";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const LikeProfile = ({ userProfile }) => {
  const { authUser } = useAuthContext();
//   owner profile:
const isOwnerProfile = authUser?.username === userProfile?.login;
  // handle Like Profile:
  const handleLikeProfile = async () => {
    try {
      const res = await fetch(`/api/v1/users/like/${userProfile.login}`, {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!authUser || isOwnerProfile) {
    return null;
  }
  return (
    <button
      onClick={handleLikeProfile}
      className="p-2 w-full italic text-sm font-medium rounded-md bg-glass border border-blue-500 flex items-center gap-2"
    >
      <FaHeart className="w-4 h-4" />
      Like Profile
    </button>
  );
};

export default LikeProfile;
