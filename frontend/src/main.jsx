import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import GameOneScreen from "./pages/GameOneScreen.jsx";
import ScoreBoardScreen from "./pages/ScoreBoardScreen.jsx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index={true} path="/" element={<HomeScreen />} />
			<Route path="/game-1" element={<GameOneScreen />} />
			<Route path="/scoreboard" element={<ScoreBoardScreen />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
