import { useState, useEffect } from "react";
import { timeFormatter } from "../utils/timeFormatter";

const Timer = ({ startTimer, time, setTime }) => {
	useEffect(() => {
		let interval;
		if (startTimer) {
			interval = setInterval(() => {
				setTime((prev) => prev + 1);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [startTimer, time]);
	return (
		<div className="timer">
			<p>{timeFormatter(time)}</p>
		</div>
	);
};
export default Timer;
