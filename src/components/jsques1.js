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
			<Question>
				Q3. Can you explicitly assign undefined to a Variable ?
			</Question>
			<Answer>
				Ans. Yes, you can, because undefined itself is a kind of keyword which
				you can use.
				<br />
				When you want to compare value then the values, undefined or not, then
				this keyword is useful for you.
			</Answer>
			<Question>
				Q4. Difference between function scope and block scope ?
			</Question>
			<Answer>
				Ans. So, in javascript the whole document is global scope and all the
				other functions and variables are contained in this global scope.
				<br />
				<Bita>
					Function Scope: When a variable is declared inside a function, it is
					only accessible within that function and cannot be used outside that
					function.
					<br />
					Block Scope: A variable when declared inside the if or switch
					conditions or inside for or while loops, are accessible within that
					particular condition or loop.
				</Bita>{" "}
				To be consise the variables declared inside the curly braces are called
				as within block scope.
				<br />
				Coming back to the use of keywords, var is called as function scope that
				is if a variable is declared using var keyword it will be accessible
				throughout the function.
				<br />
				let &#38; const are also called as block scope that is they are
				accessible within that particular block. Here let is used for variable
				which can be changed as we proceed through the program whereas const is
				used for a variable which doesn’t change till the program ends, that is
				it remains constant throughout the program.
				<br />
				The following program explains the use of var, let and const:
				<Example>
					function hello()&#123;
					<br />
					<div className="ms-4">
						if (true) &#123;
						<br />
						var a = "JavaScript"; <br />
						let b = "C++"; <br />
						const c = "Python"; <br /> &#125;
						<br />
						console.log(a); // "JavaScript" <br />
						console.log(b) // Uncaught ReferenceError b not defined.
					</div>{" "}
					&#125;
				</Example>
			</Answer>
			<Question>
				Q5. What is automatic semicolon insertion or what is ASI in JavaScript?{" "}
			</Question>
			<Answer>
				Ans. You must have used semicolon many times in JavaScript code. Almost
				all lines are terminated by a semicolon. If you have practice of ending
				with a semicolon, of course. Also, you must have observed that when you
				do not write a semicolon, I mean, if you forget to write, then also
				JavaScript is not going to give you any error.
				<br />
				<Bita>
					And the reason for not showing error is that the compiler
					automatically adds a semicolon at the end of those lines.
					<br />
					This means writing a semicolon at the end of line is optional in
					JavaScript. And it also means that when there is a line break like on
					this line console.log, JavaScript inserts a semicolon at the end of
					line. And this very feature is called as automatic semicolon
					insertion.
				</Bita>
			</Answer>
		</div>
	);
}
export default Jsques1;
