import React from "react";
import { Answer, Example, Question } from "../styled-components/styled-com";

function Jsques1() {
	return (
		<div>
			<Question>
				{" "}
				Q1. What is the difference between null and undefined ?
			</Question>
			<Answer>
				Ans. At the time of variable declaration, there is no type decided. Then
				after the value is assigned to a variable, it decides the data type.
				<Example>
					let x; // undefined
					<br />
					x=9; //number
				</Example>
			</Answer>
		</div>
	);
}
export default Jsques1;
