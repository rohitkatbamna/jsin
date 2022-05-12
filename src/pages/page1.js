import React from "react";
import Jsques1 from "../components/jsques1";
import Jsques2 from "../components/jsques2";
import Jsques3 from "../components/jsques3";
import Navbar from "../components/navbar";

function Page1() {
	return (
		<>
			<Navbar />
			<Jsques1 />
			<Jsques2 />
			<Jsques3 />
		</>
	);
}
export default Page1;
