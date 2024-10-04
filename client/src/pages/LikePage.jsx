import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { formatDate } from "../utils/functions";

const LikePage = () => {
  const [likes, setLikes] = useState([]);
  // Simulate fetching data from API:
  useEffect(() => {
    const getLikedBy = async () => {
      try {
        const res = await fetch("/api/v1/users/likes", {
          credentials: "include",
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message);
        }
        setLikes(data.likedBy);
      } catch (error) {
        toast.error(error.message);
      }
    };
    // Call the function:
    getLikedBy();
  }, []);
  console.log(likes);
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg px-4">
      <table className="w-full text-sm text-left rtl:text-right bg-glass overflow-hidden">
        <thead className="text-sm bg-glass uppercase">
          <tr>
            <th scope="col" className="p-4 border-r border-r-gray-500">
              <div className="flex items-center">NO</div>
            </th>
            <th scope="col" className="px-6 py-3 border-r border-r-gray-500">
              username
            </th>
            <th scope="col" className="px-6 py-3 border-r border-r-gray-500">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {likes.map((user, idx) => (
            <tr
              key={user.username}
              className="bg-glass  border-b border-b-gray-400"
            >
              <td className="w-4 p-4 ">
                <div className="flex items-center">
                  <span>{idx + 1}</span>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center  px-6 py-4 whitespace-nowrap"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.avatarUrl}
                  alt="profile-image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">{user.username}</div>
                </div>
              </th>
              <td className="px-6 py-4">{formatDate(user.likedDate)}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <FaHeart className="w-6 h-6 text-red-600" />
                  Liked on your Profile
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LikePage;
