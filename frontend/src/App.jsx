import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<Header />
			<ToastContainer autoClose={1000} />
			<Outlet />
		</>
	);
}

export default App;
