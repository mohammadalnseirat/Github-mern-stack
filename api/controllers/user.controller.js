import User from "../models/user.models.js";
import { handleErrors } from "../utils/error.js";

// 1-Function to get Profile User and Repos:
export const getProfileUserAndRepos = async (req, res, next) => {
  const { username } = req.params;
  try {
    // 60 requests per hour, 5000 requests per hour for authenticated requests
    // https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const userProfile = await userRes.json();
    // get the repos:
    const reposRes = await fetch(userProfile.repos_url, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });
    const repos = await reposRes.json();
    // return the data and sen the response back:
    res.status(200).json({ userProfile, repos });
  } catch (error) {
    console.log("Error While Creating Get Profile User Api", error.message);
    next(error);
  }
};
