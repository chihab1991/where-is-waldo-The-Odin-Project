import asyncHandler from "express-async-handler";
import Scoreboard from "../models/scoreboardModel.js";

const addScore = asyncHandler(async (req, res) => {
	const { username, time } = req.body;
	const newScore = await Scoreboard({ username, time }).save();
	if (newScore) {
		res.status(200).json({ message: "Player score added!!" });
	} else {
		res.status(401);
		throw new Error("Can't add player score, something went wrong.");
	}
});

const getAllScores = asyncHandler(async (req, res) => {
	const allScores = await Scoreboard.find().sort({ time: 1 });
	if (allScores) {
		res.status(200).json({ allScores });
	} else {
		res.status(401);
		throw new Error("Can't add player score, something went wrong.");
	}
});

export { addScore, getAllScores };
