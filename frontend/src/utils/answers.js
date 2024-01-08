import waldoImg from "../assets/images/waldo.1e2ee91f0cfa0ceeb550.jpg";
import odlawImg from "../assets/images/odlaw.f34b5260e086e9e07982.jpg";
import wizardWhitebeardImg from "../assets/images/Untitled.jpeg";
export const ANSWERS = [
	{
		id: "1",
		name: "waldo",
		found: false,
		imgUrl: waldoImg,
		x: { min: 50, max: 55 },
		y: { min: 46, max: 53 },
	},
	{
		id: "2",
		name: "odlaw",
		found: false,
		imgUrl: odlawImg,
		x: { min: 24, max: 27 },
		y: { min: 46, max: 56 },
	},
	{
		id: "3",
		name: "wizzardWhiteBeard",
		found: false,
		imgUrl: wizardWhitebeardImg,
		x: { min: 61, max: 66 },
		y: { min: 46, max: 54 },
	},
];
