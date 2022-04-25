import React from "react";
import {
	Answer,
	Bita,
	Example,
	LCB,
	Question,
	RCB,
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
					function hello()
					<LCB />
					<br />
					<div className="ms-4">
						if (true) <LCB />
						<br />
						var a = "JavaScript"; <br />
						let b = "C++"; <br />
						const c = "Python"; <br /> <RCB />
						<br />
						console.log(a); // "JavaScript" <br />
						console.log(b) // Uncaught ReferenceError b not defined.
					</div>{" "}
					<RCB />
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
					line. And this very feature is called as automatic semicolon insertion
					OR ASI.
				</Bita>
			</Answer>
			<Question>Q6. Should you terminate all lines by a semicolon ?</Question>
			<Answer>
				Ans. It's a good practice to have a semicolon at the end though it is
				optional because JavaScript does insert a semicolon. But if you put it,
				it's a good practice. At least you have to make sure that if you do not
				put semicolon in a improper way.
			</Answer>
			<Question>
				Q7. Why this code is returning undefined in spite of function returning
				a valid object literal ?
				<Example>
					function test() <LCB /> <br />
					<div className="ms-4">
						return <br />
						<LCB />
						<div className="ms-4">a : 5</div>
						<br />
						<RCB />
					</div>
					<br />
					<RCB />
					<br />
					const obj = test(); <br />
					console.log(obj); //undefined
				</Example>
			</Question>
			<Answer>
				Ans. The automatic semicolon insertion OR ASI put semicolon at the end
				of return thus we are returning nothing.{" "}
				<Bita>Move Left curly barket next to return.</Bita>
			</Answer>
			<Question>
				Q7. Can use strict statement are the strict mode change the behavior of
				ASI ?
			</Question>
			<Answer>
				Ans. No, it doesn't change the behavior. If you write you strict, that
				does not mean that you have to end all lines with the semicolon. I mean
				the respective lines anyway. Like if condition is never terminated with
				a semicolon, but lines which are to be terminated with a semicolon that
				also, even if you use use strict, it doesn't force you to put a
				semicolon on all lines.
			</Answer>
			<Question>Q8. Difference between Rest and Spread operator ?</Question>
			<Answer>
				Ans.From year ES6 onwards. There are these ... dots used in many places.
				Also, sometimes they are called as the rest operator. And sometimes the
				very same three dots are called spread operator.
				<br />
				So let's check it out. We will begin with the rest operator first.
				Imagine a situation where you have to create a function called sum,
				which can take any number of arguments and at the end it should return
				the sum of all the parameters passed to it. Let's start practically.
				Here I am creating the function. Function sum. Now I do not warn that
				there are two parameters passed or maybe three parameters passed. What I
				just want is that I should be able to pass any number of parameters and
				that should be received by this function.
				<Example>
					function sum(...nums)
					<LCB />
					<br />
					<span className="ms-4"></span>console.log(nums);
					<br />
					<RCB />
					<br />
					console.log(sum(3,4)) // [3,4]
					<br />
					console.log(sum(3,4,5)) // [3,4,5]
				</Example>
				<Bita>
					We want the function to receive any amount of numbers and want it to
					work so use ... (rest operator) Only usage of it in this way is rest
					operator.
				</Bita>
			</Answer>
		</div>
	);
}
export default Jsques1;
