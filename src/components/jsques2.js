import React from "react";
import {
	Answer,
	Bita,
	Example,
	LCB,
	Question,
	RCB,
} from "../styled-components/styled-com";

function Jsques2() {
	return (
		<div>
			<Question>Q24. How does a closure work in JavaScript?</Question>
			<Answer>
				Ans.{" "}
				<Bita>
					Ideally, when a function comes under another function, a closure is
					created.Closure pattern remembers outer variable and also helps to
					access outer scope members.
				</Bita>
				<Example>
					function outer()
					<LCB />
					<br />
					<div className="ms-4">
						function inner()
						<LCB />
						<br />
						<div className="ms-4">console.log("Inner Function called");</div>
						<RCB />
					</div>
					inner();
					<br />
					<RCB />
					<br />
					outer(); //"Inner Function called"
				</Example>
				<Bita>
					So ideally, when you use closure, that means you are making the
					private members globally available but with a cause.
				</Bita>
			</Answer>
			<Question>
				Q25. How can you access private variable or a function outside of the
				scope ?
			</Question>
			<Answer>
				Ans. So we can do that using closure. We return the function without
				parentheses and we can achieve it.
			</Answer>
		</div>
	);
}

export default Jsques2;
