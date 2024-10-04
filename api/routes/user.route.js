import express from "express";
import {
  getLikes,
  getProfileUserAndRepos,
  likeProfile_post,
} from "../controllers/user.controller.js";
import { ensureAuthenticatedUser } from "../middleware/ensureAuthenticatedUser.js";

const router = express.Router();

router.get("/profile/:username", getProfileUserAndRepos);
router.post("/like/:username", ensureAuthenticatedUser, likeProfile_post);
router.get("/likes", ensureAuthenticatedUser, getLikes);

export default router;
