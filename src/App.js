import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page1";
import "./scss/app.scss";
function App() {
	return (
		<div className="app">
			<h1 className="text-center fw-bold">JavaScript Interview Questions</h1>
			<Router>
				<Routes>
					<Route path="/" element={<Page1 />} exact />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
