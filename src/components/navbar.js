import React from "react";
import { Link } from "react-router-dom";
import "../scss/navbar.scss";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm navbar-light navbar_all_of_it">
			<div className="container-fluid navbar_container">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse navbar_collapse"
					id="navbarNav">
					<ul className="navbar-nav ms-auto me-auto navbar_collapse_navbar">
						<Link to="/" className="navbar_collapse_link">
							<li className="nav-item">
								<button
									type="button"
									className="nav-link active btn btn-danger">
									Page 1
								</button>
							</li>
						</Link>
						<Link to="/" className="navbar_collapse_link">
							<li className="nav-item">
								<button
									type="button"
									className="nav-link active btn btn-danger">
									Page 2
								</button>
							</li>
						</Link>
						<Link to="/others" className="navbar_collapse_link">
							<li className="nav-item">
								<button
									type="button"
									className="nav-link active btn btn-danger">
									Others
								</button>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
