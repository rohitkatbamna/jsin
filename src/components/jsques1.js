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
				Ans. From year ES6 onwards. There are these ... dots used in many
				places. Also, sometimes they are called as the rest operator. And
				sometimes the very same three dots are called spread operator.
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
					operator. So whenever you use three dots with function to deal with
					any number of parameters, then you call it rest operator. That is for
					the rest of parameters.
				</Bita>
				<br />
				As the rest operator puts the separate data values in one area, the
				spread does exactly the opposite.
				<Example>
					let arr1 = [1,2,3];
					<br />
					let arr2 = [...arr1,4,5];
					<br />
					console.log(arr2); // [1,2,3,4,5]
				</Example>
				<Bita>
					They are three dots only, but with the context where they have used,
					they behavior changes.
				</Bita>
			</Answer>
			<Question>Q9. Can we use argument object in arrow function ?</Question>
			<Answer>
				{" "}
				Ans. It cannot be used if it is the traditional way of writing function,
				it can work, otherwise it will not work.
			</Answer>
			<Question>
				Q10. Which is the best way to create new arrays with assignments ?
			</Question>
			<Answer>Ans. Use Spread operator</Answer>
			<Question>
				Q11. How can you handle the number of parameters passed to a function ?
				Or the question can be create a function which can take any number of
				parameters that returns some or maybe max value or any other such
				calculated values.
			</Question>
			<Answer>
				Ans. So you can use the rest operator to deal with such situation.
			</Answer>
			<Question>
				Q12.Can the rest operator be placed anywhere in the function parameter
				list? Or there can be a core sample like this. One may ask you, is this
				piece of code valid ?<br />
				<Example>
					function text(...a,b)
					<LCB />
					<br /> /any Statements here
					<br />
					<RCB />
				</Example>
			</Question>
			<Answer>
				Ans. We cannot have a rest parameter in the beginning of parameter list.
				We have to put it at last. If we have just a parameter list, it's okay.
				But if we have more parameters then the rest parameter should be at last
				position because it is the rest of the parameters.
			</Answer>
			<Question>
				Q13. When do you get infinity or minus that is negative infinity
				(-Infinity) as output ?
			</Question>
			<Answer>
				Ans.{" "}
				<Bita>
					In JavaScript, the numbers are stored in 64 bit format. It means any
					value which cannot fit in this 64 bit format will return infinity.
					That means it cannot hold the value. The value is larger than 64 bit.
					At that time, you get infinity.
				</Bita>
				<Example>
					console.log(9e400); // Infinity
					<br />
					console.log(-9e400); // -Infinity
					<br />
					console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
					<br />
					console.log(Number.MAX_VALUE * 2) // Infinity
				</Example>
				Ideally, when you expect that in some calculation, you might get some
				huge value and you want to put a validation, there is useful method
				called <Bita>isFinite().</Bita>
			</Answer>
			<Question>
				Q14. How will you put a validation for positive or negative infinity?
			</Question>
			<Answer>
				Ans. The following is the anwser.
				<Example>
					<br />
					if(num = = = Number.NEGATIVE_INFINITY) <LCB />
					<br />
					<span className="ms-4"> return 'Negative Infinity Value'</span>
					<br />
					<RCB />
					<br />
					else <LCB /> <br />
					<span className="ms-4"> return num //or some other value of cal</span>
					<br />
					<RCB />
				</Example>
				<Example>
					<br />
					if(num = = = Number.POSITIVE_INFINITY) <LCB />
					<br />
					<span className="ms-4"> return 'Positive Infinity Value'</span>
					<br />
					<RCB />
					<br />
					else <LCB /> <br />
					<span className="ms-4"> return num //or some other value of cal</span>
					<br />
					<RCB />
				</Example>
			</Answer>
			<Question>
				Q15. What will be the output of this code ?
				<Example>console.log(1/0)</Example>
			</Question>
			<Answer>Ans. We get Infinity in JavaScript.</Answer>
			<Question>Q16. When do you get NaN as output?</Question>
			<Answer>
				Ans. NaN is a global property representing 'Not a Number'(NaN).It is a
				special Number. isFinite() can also chaeck this. Consider the following
				Example
				<Example>
					console.log(5 * 'value'); // gives a NaN
					<br />
					console.log(NaN = = NaN); // false
					<br />
					console.log(NaN = = = NaN) // false
				</Example>
				<Bita>
					{" "}
					Remember NaN = = NaN and NaN = = = NaN both evalutes to false.
				</Bita>
			</Answer>
			<Question>
				Q17. What is the difference between isNaN and isFinite ?
			</Question>
			<Answer>
				Ans. isNaN() is just going to check whether the value is not a number or
				not and isFinite checks for NaN as well as infinity values.
			</Answer>
			<Question>Q18. Explain must know points of arrow function</Question>
			<Answer>
				Ans. So in other words you can see that arrow function is actually
				function expression.Arrow function is less verbose. That means you have
				less code to write and better way to deal with it. We can also write
				IIFE(Immediately Invoked Function Expression) with es5 syntax.We use
				this IIFE to avoid global Leakages.
				<Example>
					(function test()
					<LCB />
					<br />
					console.log("IIFE");
					<br />
					<RCB />
					)(); //IIFE
					<br />
					/IIFE in without ES6
				</Example>
				<Example>
					(() ={">"}
					<LCB />
					<br />
					console.log("IIFE");
					<br />
					<RCB />
					)(); //IIFE
					<br />
					/IIFE in with ES6
				</Example>
				<Bita>
					Three things that not work with arrow function.
					<ol>
						<li>
							{" "}
							"this" object does not work with arrow function.
							<Example>
								const myWork = <LCB />
								<br />
								test: () ={">"} console.log(this),
								<br />
								test1() <br />
								<LCB /> <br />
								console.log(this); <RCB /> <br />
								<RCB />
								<br />
								myWork.test(); // points to intance of global window object
								<br />
								myWork.test1(); // points to instance of myWork object
							</Example>
							Now why does this works with traditional function but not with
							arrow function. The reason is before ES6 their was no class, the
							function also had to do the job of class. But with ES6 class was
							defined so arrow function no longer needed to do the job of class
							so it was not their.
						</li>
						<li>
							Arguments object does not work with arrow function. The arguments
							object which used to show us the parameter pass to the function
							like this one.
							<Example>
								function test() <LCB /> <br />
								<div className="ms-4">console.log(arguments);</div>
								<br />
								<RCB /> <br /> test(1, 2, 3, 4); // logs <LCB /> '0': 1, '1': 2,
								'2': 3, '3': 4 <RCB />
							</Example>
							The above in arrow function gives ERROR. See below Example
							<Example>
								const test = () ={">"} <LCB /> <br />
								console.log(arguments);
								<br />
								<RCB />;
								<br /> test(1, 2, 3, 4); // ReferenceError: arguments is not
								defined
							</Example>
							Use rest operator here to act as arguments.
						</li>
						<li>
							And third is you cannot use new to call arrow function. Naturally
							you cannot because arrow function will not act as a class. Using
							arrow will give error.
						</li>
					</ol>
				</Bita>
			</Answer>
			<Question>
				Q20. Explain the syntactical features of arrow function.
			</Question>
			<Answer> Ans. Here all of syntax related changes are given</Answer>
			<Question>Q21. Why "this" does not work in arrow function ?.</Question>
			<Answer>
				Ans. Then the answer is of course no. But the reason is that we already
				have a class keyword to deal with the classes. So we do not need the
				function to act as a class. So there is no point that "this" which
				actually is used to refer the current context is needed in function.
				That's why our function is free from that job. And that's the reason why
				this object does not work.
			</Answer>
			<Question>
				Q21. Explain output of the following code with a reason ?
				<Example>
					const myWork = <LCB />
					<br />
					test: () ={">"} console.log(this),
					<br />
					<RCB />
					<br />
					myWork.test();
				</Example>
			</Question>
			<Answer>Ans. Check point No.1 in Q18</Answer>
			<Question>
				Q22. How can you handle arguments object like functionality in arrow
				function ?
			</Question>
			<Answer>
				Ans. Arrow function does not support arguments object (...)rest operator
				is the replacement for it.
			</Answer>
			<Question>Q23. Can you write IIFE with arrow functions ?</Question>
			<Answer>
				Ans. Yes, of course.
				<Example>
					(() ={">"}
					<LCB />
					<br />
					console.log("IIFE");
					<br />
					<RCB />
					)(); //IIFE
					<br />
					/IIFE in with ES6
				</Example>
			</Answer>
		</div>
	);
}
export default Jsques1;
