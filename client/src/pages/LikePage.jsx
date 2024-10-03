import React from "react";
import { FaHeart } from "react-icons/fa";

const LikePage = () => {
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
          <tr className="bg-glass  border-b border-b-gray-400">
            <td className="w-4 p-4 ">
              <div className="flex items-center">
                <span>1</span>
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center  px-6 py-4 whitespace-nowrap"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJr-fGkiy1DE5A0JNOkcmCNGcXuQXdzENZA&s"
                }
                alt="profile-image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">Alaa</div>
              </div>
            </th>
            <td className="px-6 py-4">dasasa</td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-2">
                <FaHeart className="w-6 h-6 text-red-600" />
                Liked on your Profile
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LikePage;
