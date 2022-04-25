import React from "react";
import {
	Answer,
	Bita,
	Example,
	Question,
} from "../styled-components/styled-com";

function Jsques1() {
	return (
		<div>
			<Question>
				{" "}
				Q1. What is the difference between null and undefined ?
			</Question>
			<Answer>
				Ans. <Bita>undefined and null both are primitive data type.</Bita> It
				means the value does not exist in the compiler. At the time of variable
				declaration, there is no type decided. Then after the value is assigned
				to a variable, it decides the data type.
				<Example>
					let x;
					<br />
					console.log(x); // undefined
					<br />
					console.log(typeof x); // undefined
					<br />
					x = 9;
					<br />
					console.log(typeof x) // number
				</Example>
				It is the intentional absence of the value.
				<Example>
					let x = null;
					<br />
					console.log(x) // null
					<br />
					console.log(typeof x); // object
				</Example>
				<Bita>
					typeof x is object which on first thought should be null but this is a
					mistake compiler makes due to legacy consideration.
				</Bita>
			</Answer>
			<Question>
				Q2. What will be the output of undefined = = null and undefined = = =
				null?
			</Question>
			<Answer>
				Ans. First one is true and second one is false
				<Example>
					console.log(undefined = = null); // true
					<br />
					console.log(undefined = = = null); // false
				</Example>
				<Bita>
					You may ask why undefined = = null is true. Well ECMAScript as of 2020
					edition does not have reasoning for it, it just says explicitly (in a
					clear and detailed manner,leaving no room for confusion or doubt) that
					undefined = = null.
				</Bita>
			</Answer>
		</div>
	);
}
export default Jsques1;
