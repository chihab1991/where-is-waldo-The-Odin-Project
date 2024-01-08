import { useState, useEffect } from "react";
import Timer from "../components/Timer";
import Answer from "../components/Answer";
import { toast } from "react-toastify";
import SubmitScore from "../components/SubmitScore";

import waldoImg from "../assets/images/waldo.1e2ee91f0cfa0ceeb550.jpg";
import odlawImg from "../assets/images/odlaw.f34b5260e086e9e07982.jpg";
import wizardWhitebeardImg from "../assets/images/Untitled.jpeg";
import puzzleOne from "../assets/images/level-1.8b871ac1382de68197ba.jpg";
import { ANSWERS } from "../utils/answers";

let answers;
const GameOneScreen = () => {
	const [startTimer, setStartTimer] = useState(false);
	const [startGame, setStartGame] = useState(false);
	const [endGame, setEndGame] = useState(false);
	const [time, setTime] = useState(0);
	const [posX, setPosX] = useState(0);
	const [posY, setPosY] = useState(0);
	const [clickedModal, setClickedModal] = useState(false);
	const [modalPositionX, setModalPositionX] = useState(0);
	const [modalPositionY, setModalPositionY] = useState(0);
	const startGameHandler = () => {
		setStartTimer(true);
		setStartGame(true);
	};

	const handleClick = (e) => {
		const { width, height } = e.target.getBoundingClientRect();
		const { offsetX, offsetY } = e.nativeEvent;
		const X = Math.round((offsetX / width) * 100);
		const Y = Math.round((offsetY / height) * 100);
		setPosX(X);
		setPosY(Y);

		setModalPositionX(e.clientX + 5);
		setModalPositionY(e.clientY - 5);
		setClickedModal(true);
		console.log({ X, Y });
	};
	const handleAnswerChecker = (id) => {
		const index = answers.findIndex((obj) => obj.id == id);
		console.log(answers[index]);
		if (
			posX >= answers[index].x.min &&
			posX <= answers[index].x.max &&
			posY >= answers[index].y.min &&
			posY <= answers[index].y.max
		) {
			answers[index].found = true;
			toast.success("Right Answer!!");
		} else {
			toast.error("Wrong Answer!!");
		}
		answers = answers.filter((answer) => {
			return answer.found == false;
		});
		setClickedModal(false);
		if (answers.length === 0) {
			setStartTimer(false);
			setStartGame(false);
			setEndGame(true);
		}
	};

	useEffect(() => {
		answers = [...ANSWERS];
		answers = answers.map((answer) => {
			return { ...answer, found: false };
		});
		setStartTimer(false);
		setStartGame(false);
		setEndGame(false);
		setTime(0);
		setPosX(0);
		setPosY(0);
		setClickedModal(false);
		setModalPositionX(0);
		setModalPositionY(0);
	}, []);
	return (
		<>
			{!startTimer && !startGame && !endGame && (
				<div className="modal">
					<div className="modal-box">
						<h3>Find these characters</h3>
						<div>
							<img src={waldoImg} alt="Waldo" />
							<img src={wizardWhitebeardImg} alt="Wizars whitebeard" />
							<img src={odlawImg} alt="Odlaw" />
						</div>
						<button className="btn-start" onClick={startGameHandler}>
							Start the game
						</button>
					</div>
				</div>
			)}
			{startTimer && startGame && (
				<>
					<Timer startTimer={startTimer} time={time} setTime={setTime} />
					<div className="gameOneImg" onClick={handleClick}>
						<img src={puzzleOne} alt="Puzzle One" />
					</div>
					{clickedModal && (
						<div
							className="clicked-modal"
							style={{
								top: `${modalPositionY}px`,
								left: `${modalPositionX}px`,
							}}
						>
							<ul>
								{answers.map((answer) => {
									return (
										<Answer
											key={answer.id}
											answer={answer}
											handleAnswerChecker={handleAnswerChecker}
										/>
									);
								})}
							</ul>
						</div>
					)}
				</>
			)}
			{endGame && <SubmitScore time={time} />}
		</>
	);
};
export default GameOneScreen;
