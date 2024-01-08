import axios from "axios";
import { useState, useEffect } from "react";
import { timeFormatter } from "../utils/timeFormatter";

const ScoreBoardScreen = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [scores, setScores] = useState(null);

	useEffect(() => {
		const scoreSGetter = async () => {
			try {
				const res = await axios.get("/api/scoreboard/");
				console.log(res);
				if (res) {
					setLoading(false);
					setError(false);
					setScores(res.data.allScores);
				}
			} catch (err) {
				setLoading(false);
				setError(true);
			}
		};
		scoreSGetter();
	}, []);
	return (
		<>
			{loading && <p>Still loading scores</p>}
			{!loading && error && <p>Please verify your internet connection.</p>}
			<div className="scoreboard">
				{scores &&
					scores.map((score) => {
						return (
							<div key={score._id}>
								<p>{score.username}</p>
								<p>{timeFormatter(score.time)}</p>
							</div>
						);
					})}
			</div>
		</>
	);
};
export default ScoreBoardScreen;
