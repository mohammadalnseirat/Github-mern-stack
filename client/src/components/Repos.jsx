import React from "react";
import Repo from "./Repo";

const Repos = ({ repos, alwaysWidthFull = false }) => {
  const className = alwaysWidthFull ? "w-full" : "lg:w-2/3 w-full";
  return (
    <div className={`${className} bg-glass  rounded-lg px-8 py-6`}>
      <ol className="relative border-s border-gray-300">
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
        {repos.length === 0 && (
          <p className="flex items-center h-32 justify-center text-red-500 font-bold text-3xl italic underline underline-offset-2">
            No Repos Found!
          </p>
        )}
      </ol>
    </div>
  );
};

export default Repos;
