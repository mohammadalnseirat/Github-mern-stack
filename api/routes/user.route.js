import express from "express";
import { getProfileUserAndRepos } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", getProfileUserAndRepos);

export default router;
