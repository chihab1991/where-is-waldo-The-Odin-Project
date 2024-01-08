import express from "express";

const router = express.Router();
import {
	addScore,
	getAllScores,
} from "./../controllers/scoreboardController.js";

router.get("/", getAllScores);
router.post("/", addScore);

export default router;
