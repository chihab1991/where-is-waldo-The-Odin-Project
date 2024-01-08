import mongoose from "mongoose";

const scoreboardSchema = mongoose.Schema(
	{
		username: { type: String, required: true },
		time: { type: Number, required: true },
	},
	{ timestamps: true }
);

const Scoreboard = mongoose.model("scoreboard", scoreboardSchema);

export default Scoreboard;
