import express from "express";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// GET /auth/github
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in GitHub authentication will involve redirecting
//   the user to github.com.  After authorization, GitHub will redirect the user
//   back to this application at /auth/github/callback
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
),
  function (req, res) {
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  };
// GET /auth/github/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function will be called,
//   which, in this example, will redirect the user to the home page.
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: process.env.CLIENT_BASE_URI + "/login",
  }),
  function (req, res) {
    res.redirect(process.env.CLIENT_BASE_URI);
  }
);
// check if the user is authenticated:
router.get("/check", (req, res) => {
  if (req.isAuthenticated()) {
    res.send({ user: req.user });
  } else {
    res.send({ user: null });
  }
});

// Logout Route:
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.json({ message: "Logged out successfully!" });
  });
});

export default router;
