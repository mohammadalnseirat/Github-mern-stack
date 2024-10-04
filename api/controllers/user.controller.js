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

// 2-Function to Like Profile:
export const likeProfile_post = async (req, res, next) => {
  const { username } = req.params;
  try {
    // Find the authenticated user:
    const user = await User.findById(req.user._id.toString());
    console.log(user, "auth User");

    // find profile user to like :
    const userToLike = await User.findOne({ username });
    // check if there is no user to like:
    if (!userToLike) {
      return next(handleErrors(404, "User Not a memeber"));
    }

    // check if the user is already liked:
    if (user.likedProfiles.includes(userToLike.username)) {
      return next(handleErrors(400, "User Already Liked"));
    }

    // push the user to the liked profiles array:
    user.likedProfiles.push(userToLike.username);
    userToLike.likedBy.push({
      username: user.username,
      avatarUrl: user.avatarUrl,
      likedDate: Date.now(),
    });
    // save both users:
    await Promise.all([user.save(), userToLike.save()]);
    res.status(200).json({ message: "Liked Profile SuccessFully!" });
  } catch (error) {
    console.log("Error While Creating Like Profile Api", error.message);
    next(error);
  }
};

// 3-Function to get Liked Profiles:
export const getLikes = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id.toString());
    res.status(200).json({ likedBy: user.likedBy });
  } catch (error) {
    console.log("Error While Creating Get Likes Api", error.message);
    next(error);
  }
};
