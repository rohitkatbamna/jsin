import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OthersPage from "./pages/otherspage";
import Page1 from "./pages/page1";
import "./scss/app.scss";
function App() {
	return (
		<div className="app" style={{ margin: "2vw 5vw 0 5vw" }}>
			<h1 className="text-center fw-bold">JavaScript Interview Questions</h1>
			<Router>
				<Routes>
					<Route path="/" element={<Page1 />} exact />
					<Route path="/others" element={<OthersPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
