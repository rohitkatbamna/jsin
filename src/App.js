import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page1";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Page1 />} exact />
			</Routes>
		</Router>
	);
}

export default App;
