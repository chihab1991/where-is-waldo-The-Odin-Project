import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { timeFormatter } from "../utils/timeFormatter";
import axios from "axios";
const SubmitScore = ({ time }) => {
	const [username, setUsername] = useState("");
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("/api/scoreboard/", { username, time });
			if (res.status === 200) {
				navigate("/");
			}
		} catch (error) {
			setError(true);
		}
	};
	return (
		<>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="username">Username: </label>
					<input
						type="text"
						name="username"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<p>Your time is: {timeFormatter(time)}</p>
				</div>
				<button type="submit">Submit Score</button>
			</form>
			{error && <p>Please verify your internet connection!!!</p>}
		</>
	);
};
export default SubmitScore;
