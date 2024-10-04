import express from "express";
import { explorePopularRepos } from "../controllers/explore.controller.js";
import { ensureAuthenticatedUser } from "../middleware/ensureAuthenticatedUser.js";

const router = express.Router();

router.get("/repos/:language", ensureAuthenticatedUser, explorePopularRepos);

export default router;
