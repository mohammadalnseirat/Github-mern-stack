import React, { useCallback, useEffect, useState } from "react";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

const HomePage = () => {
  // some state to get the data:
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recent");

  // UseEffect to get the data:
  // we use useCallback to prevent the infinite loop:
  const getUserProfileAndRepos = useCallback(
    async (username = "mohammadalnseirat") => {
      try {
        setLoading(true);
        const res = await fetch(`/api/v1/users/profile/${username}`);
        const { repos, userProfile } = await res.json();
        setUserProfile(userProfile);
        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // descending , recent will be at the top
        setRepos(repos);
        console.log("repos", repos);
        return { userProfile, repos };
      } catch (error) {
        toast.error("Error While Get User Profile and Repos!");
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  // onSearch Function:
  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setUserProfile(null);
    setRepos([]);
    const { userProfile, repos } = await getUserProfileAndRepos(username);
    setRepos(repos);
    setUserProfile(userProfile);
    setLoading(false);
    setSortType("recent");
  };

  // Function To Sort Repos:
  const onSort = (sortType) => {
    if (sortType === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // descending , recent will be at the top
    } else if (sortType === "stars") {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count); // descending , stars will be at the top
    } else if (sortType === "forks") {
      repos.sort((a, b) => b.forks_count - a.forks_count); // descending , forks will be at the top
    }
    setSortType(sortType);
    setRepos([...repos]);
  };
  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      {repos.length > 0 && !loading && (
        <SortRepos onSort={onSort} sortType={sortType} />
      )}
      <div className="flex flex-col gap-2 justify-center items-start lg:flex-row">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        {!loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default HomePage;
