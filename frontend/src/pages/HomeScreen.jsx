import waldoImg from "../assets/images/waldo.1e2ee91f0cfa0ceeb550.jpg";
import odlawImg from "../assets/images/odlaw.f34b5260e086e9e07982.jpg";
import wizardWhitebeardImg from "../assets/images/Untitled.jpeg";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
	const navigate = useNavigate();

	const clickHandler = () => {
		navigate("/game-1");
	};
	return (
		<>
			<h2>Where's Waldo?</h2>
			<p>
				Where's waldo is children's puzzle book by english illustrator Martin
				Handford. Where the players are challenged to find a character named
				Wally hidden in the group.
			</p>
			<h2>This games Challenge:</h2>
			<p>
				You are challenged to find 3 characters wally, Odlaw & Wizard
				Whitebeard.
			</p>
			<div className="img-container">
				<img src={waldoImg} alt="wally" />
				<img src={odlawImg} alt="odlaw" />
				<img src={wizardWhitebeardImg} alt="wizard whitebeard" />
			</div>
			<div>
				<button className="btn-start" onClick={clickHandler}>
					Go to Game
				</button>
			</div>
		</>
	);
};
export default HomeScreen;
