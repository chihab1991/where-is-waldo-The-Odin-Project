import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<div className="nav-left">
					<Link to="/">Where's Waldo</Link>
				</div>
				<div className="nav-right">
					<Link to="/scoreboard">Score Board</Link>
				</div>
			</nav>

			<hr />
		</header>
	);
};
export default Header;
