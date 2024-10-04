import passport from "passport";
import User from "../models/user.models.js";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";

dotenv.config();
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "https://github-mern-stack.onrender.com/api/v1/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = await User.findOne({ username: profile.username });
      // if there is no user we will sign up:
      if (!user) {
        const newUser = new User({
          username: profile.username,
          name: profile.displayName,
          profileUrl: profile.profileUrl,
          avatarUrl: profile.photos[0].value,
          likedProfiles: [],
          likedBy: [],
        });
        // save the new user:
        await newUser.save();
        return done(null, newUser); // this will return the user to the client and null for the error
      } else {
        // login if the user in database:
        return done(null, user);
      }
    }
  )
);
