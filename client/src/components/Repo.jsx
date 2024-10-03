import React from "react";
import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { formatDate } from "../utils/functions";
import { PROGRAMMING_LANGUAGES } from "../utils/constant";
import toast from "react-hot-toast";

const Repo = ({ repo }) => {
  // get the date of the repo:
  const dateOfRepo = formatDate(repo?.created_at);

  // handle Click And Copy Repo:
  const handleClickAndCopyRepo = async (repo) => {
    try {
      await navigator.clipboard.writeText(repo?.clone_url);
      toast.success("Repo URL Clone is copied successfully!");
    } catch (error) {
      toast.error('Error while copying the repo URL!');
    }
  };
  return (
    <li className="mb-10 ms-7">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-lg -start-3 ring-8 ring-gray-100">
        <FaCodeBranch className="w-5 h-5 text-blue-700" />
      </span>
      <div className="flex items-center gap-2 flex-wrap">
        <a
          href={repo?.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          {repo?.name}
        </a>
        <span className="bg-yellow-100 text-yellow-800 font-medium text-sm px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <FaRegStar className="w-4 h-4" />
          {repo?.stargazers_count}
        </span>
        <span className="bg-purple-100 cursor-pointer text-purple-800 font-medium text-sm px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <FaCodeFork className="w-4 h-4" />
          {repo?.forks_count}
        </span>
        <span
          onClick={() => handleClickAndCopyRepo(repo)}
          className="cursor-pointer bg-green-100 text-green-800 font-medium text-sm px-2.5 py-0.5 rounded-full flex items-center gap-1 "
        >
          <FaCopy className="w-4 h-4" />
          Clone
        </span>
      </div>
      <time className="block text-sm my-1 cursor-pointer font-normal leading-none text-gray-400">
        Relased On{dateOfRepo}
      </time>
      <p className="mb-4 text-base font-normal text-gray-400">
        {repo?.description
          ? repo?.description.slice(0, 200)
          : "No Description Available and Provided"}
      </p>
      {PROGRAMMING_LANGUAGES[repo?.language] ? (
        <img
          src={PROGRAMMING_LANGUAGES[repo?.language]}
          alt="Programming language icon"
          className="h-8 w-8"
        />
      ) : null}
    </li>
  );
};

export default Repo;
