import React from "react";
import { FaEye } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import {
  RiGitRepositoryFill,
  RiUserFollowFill,
  RiUserUnfollowLine,
} from "react-icons/ri";
import { formatMemberSince } from "../utils/functions";
import LikeProfile from "./LikeProfile";

const ProfileInfo = ({userProfile}) => {
  // const userProfile = {
  //   avatar_url:
  //     "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
  //   bio: "👨🏻‍💻👨🏻‍💻👨🏻‍💻",
  //   email: "johndoe@gmail.com",
  //   followers: 100,
  //   following: 200,
  //   html_url: "https://github.com/mohammadalnseirat",
  //   location: "Somewhere, Earth",
  //   name: "John Doe",
  //   public_gists: 100,
  //   public_repos: 100,
  //   twitter_username: "johndoe",
  //   login: "johndoe",
  // };

  // member since date:
  const memberSinceDate = formatMemberSince(userProfile?.created_at)
  return (
    <div className="w-full lg:w-1/3 flex flex-col gap-2 lg:sticky md:top-10">
      <div className="bg-glass rounded-lg p-4">
        <div className="flex items-center gap-4">
          {/* User Avatar */}
          <a href={userProfile?.html_url} target="_blank" rel="noreferrer">
            <img
              src={userProfile?.avatar_url}
              alt="user-profile"
              className="w-24 h-24 rounded-lg mb-2"
            />
          </a>
          {/* View On Github */}
          <div className="flex flex-col items-center gap-2">
            <LikeProfile userProfile={userProfile} />
            <a
              href={userProfile?.html_url}
              target="_blank"
              rel="noreferrer"
              className="bg-glass font-medium w-full text-sm p-2 rounded-md border border-blue-500  flex items-center gap-2"
            >
              <FaEye className="w-4 h-4 " />
              View On Github
            </a>
          </div>
        </div>
        {/* user bio */}
        {userProfile?.bio ? (
          <div className="flex items-center gap-2">
            <FaCommentDots className="w-4 h-4 text-blue-500" />
            <p className="text-sm">{userProfile?.bio.substring(0, 60)}...</p>
          </div>
        ) : null}
        {/* user Location */}
        {userProfile?.location ? (
          <div className="flex items-center gap-2">
            <IoLocationOutline className="w-5 h-5 text-blue-500" />
            {userProfile?.location}
          </div>
        ) : null}
        {/* Twitter Username */}
        {userProfile?.twitter_username ? (
          <a
            href={`https://twitter.com/${userProfile?.twitter_username}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-sky-500"
          >
            <FaXTwitter className="w-4 h-4 text-blue-500" />
            {userProfile?.twitter_username}
          </a>
        ) : null}
        {/* Member Since Date */}
        <div className=" my-2 cursor-pointer">
          <p className="text-sm font-bold text-blue-500">Member Since:</p>
          <p className="text-sm">{memberSinceDate}</p>
        </div>
        {/* Email Address */}
        {userProfile?.email && (
          <div className=" my-2 cursor-pointer">
            <p className="text-sm font-bold text-blue-500">Email Address:</p>
            <p className="text-sm hover:underline cursor-pointer">
              {userProfile?.email}
            </p>
          </div>
        )}
        {/* Full Name */}
        {userProfile?.name && (
          <div className=" my-2 cursor-pointer">
            <p className="text-sm font-bold text-blue-500">Full Name:</p>
            <p className="text-sm">{userProfile?.name}</p>
          </div>
        )}
        {/* username */}

        <div className=" my-2 cursor-pointer">
          <p className="text-sm font-bold text-blue-500">Username:</p>
          <p className="text-sm">{userProfile?.login}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mx-4">
        {/* Followers Count*/}
        <div className="bg-glass cursor-pointer rounded-lg p-2 flex items-center gap-2 flex-1 min-w-24">
          <RiUserFollowFill className="w-5 h-5 text-blue-500" />
          <p className="text-xs">Followers: {userProfile?.followers}</p>
        </div>

        {/* Following Count*/}
        <div className="bg-glass cursor-pointer rounded-lg p-2 flex items-center gap-2 flex-1 min-w-24">
          <RiUserUnfollowLine className="w-5 h-5 text-blue-500" />
          <p className="text-xs">Following: {userProfile?.following}</p>
        </div>
        {/* Repos Count Public */}
        <div className="bg-glass cursor-pointer rounded-lg p-2 flex items-center gap-2 flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-500" />
          <p className="text-xs">Public Repos: {userProfile?.public_repos}</p>
        </div>
        {/* Number of public gists */}
        <div className="flex items-center gap-2 bg-glass cursor-pointer rounded-lg p-2 flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public gists: {userProfile?.public_gists}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
