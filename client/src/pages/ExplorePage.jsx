import React, { useState } from "react";
import toast from "react-hot-toast";
import Repos from "../components/Repos";
import Spinner from "../components/Spinner";

const ExplorePage = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // Function To Explore Repos:
  const exploreRepos = async (language) => {
    setLoading(true);
    setRepos([]);
    try {
      const res = await fetch(`/api/v1/explore/repos/${language}`);
      const data = await res.json();
      setRepos(data.items);
      setSelectedLanguage(language);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="px-4">
      <div className="bg-glass max-w-3xl mx-auto rounded-lg p-4">
        <h1 className="capitalize text-gray-100 font-bold text-center font-mono text-lg">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap justify-center gap-2 my-2">
          <img
            onClick={() => exploreRepos("c++")}
            src="/c++.svg"
            alt="c++-logo"
            className="h-11 sm:h-20 hover:scale-125 transition-all duration-300 cursor-pointer rounded-full"
          />
          <img
            onClick={() => exploreRepos("java")}
            src="/java.svg"
            alt="java-logo"
            className="h-11 sm:h-20 hover:scale-125 transition-all duration-300 cursor-pointer rounded-full"
          />
          <img
            onClick={() => exploreRepos("python")}
            src="/python.svg"
            alt="python-logo"
            className="h-11 sm:h-20 hover:scale-125 transition-all duration-300 cursor-pointer rounded-full"
          />
          <img
            onClick={() => exploreRepos("typescript")}
            src="typescript.svg"
            alt="typescript-logo"
            className="h-11 sm:h-20 hover:scale-125 transition-all duration-300 cursor-pointer rounded-full"
          />
          <img
            onClick={() => exploreRepos("javascript")}
            src="javascript.svg"
            alt="javascript-logo"
            className="h-11 sm:h-20 hover:scale-125 transition-all duration-300 cursor-pointer rounded-full"
          />
        </div>
        {repos.length > 0 && (
          <h2 className="text-lg font-semibold text-center my-4">
            <span className="bg-blue-200 px-2.5 py-1 me-2 text-blue-600 font-semibold rounded-lg">
              {selectedLanguage.toUpperCase()}
            </span>
            Repositories
          </h2>
        )}
        {!loading && repos.length > 0 && (
          <Repos repos={repos} alwaysWidthFull />
        )}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default ExplorePage;
