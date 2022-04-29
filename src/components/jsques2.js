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
			<Question>Q26. Explain the advantages of a closure ?</Question>
			<Answer>
				Ans. The main advantage of closure is that any member, which is private
				for certain scope, can be accessed, keeping it private so that the
				variable is away from any accidental change of value. Accessing private
				members with a closure pattern assure better approach of making a
				variable global.
			</Answer>
			<Question>Q27. How can sum(5)(6) return 11 ?</Question>
			<Answer>
				Ans. So this way is actually called as <Bita>Currying</Bita>.Currying is
				supported by many programming languages.
				<Bita>
					It's a unique way to call inner functions, where you can pass
					arguments partially or pass multiple arguments in a function, but one
					argument at a time.
				</Bita>
				<Example>
					function sum(a)
					<LCB />
					<br />
					<div className="ms-4">
						return function (b)
						<LCB />
						<br />
						<div className="ms-4">
							<span className="ms-4">return a+b;</span>
							<br />
							<RCB />;
						</div>
					</div>
					<RCB />
					<br />
					console.log(sum(5)(6));// 11
				</Example>
				Another Example in <Bita>Arrow Function.</Bita>
				<Example>
					const sum = a ={">"} b ={">"} a+b;
					<br />
					console.log(sum(5)(6));// 11
				</Example>
			</Answer>
			<Question>
				Q28. What will this statement do ? Explain in detail.
				<Example>
					const multiplication = a ={">"} b ={">"} c ={">"} return a*b*c
				</Example>
			</Question>
			<Answer>
				Ans. This is currying in one line. See below
				<Example>
					const multiplication = a ={">"}
					<LCB />
					<br />
					<div className="ms-4">
						return b ={">"}
						<LCB /> <br />
						<div className="ms-4">
							return c ={">"}
							<LCB /> <br />
							<div className="ms-4">return a*b*c;</div>
							<RCB />
						</div>
						<RCB />
					</div>
					<RCB />
				</Example>
			</Answer>
			<Question>Q29. Explain practical usage of function currying.</Question>
			<Answer>
				Ans. Well, currying is an incredibly useful technique of functional
				programming which solves various purposes like parsing partial
				parameters or avoid unwanted repetitions.
			</Answer>
			<Question>Q30. Explain Iterables and Iterators.</Question>
			<Answer>
				Ans. The iterator concept is newly introduced in ES6. It's a kind of new
				mechanism to iterate or traverse through data structures. As you know,
				array is already iterable. It means if you want to put a far off loop on
				an array, then you can easily do that. See Example below
				<Example>
					let arr = [2,3,4,5];
					<br />
					for(let i of arr)
					<LCB />
					<br />
					<span className="ms-4">console.log(i)</span>;
					<br />
					<RCB />
				</Example>
				As shown above Similarly, strings, maps, sets. All these data
				collections are iterable.
				<br />
				But imagine that you have an object literally like this.
				<br />
				<Example>
					let obj = <LCB /> <br />
					<div className="ms-4">
						value1 : number,
						<br /> value2 :number{" "}
					</div>
					<RCB />
				</Example>
				Now you want to use for off loop on this object. In short, you want to
				make this object literal and iterable object. You can do that in ES6
				using Symbol.iterator and we are going to implement or rather convert an
				object literal into an iterable object as well. <br />
				<Bita>
					But Frist see below Basic syntax of the Symbol.iterator with easier
					way that is the array.
				</Bita>
				<Example>
					let arr = [1, 2]; <br />
					let itr = arr[Symbol.iterator]();
					<br />
					console.log(itr); //Object [Array Iterator]
					<LCB />
					<RCB />
					<br />
					console.log(itr.next());//
					<LCB />
					value: 1, done: false
					<RCB />
					<br />
					console.log(itr.next());//
					<LCB />
					value: 2, done: false
					<RCB />
					<br />
					console.log(itr.next());//
					<LCB />
					value:undefined, done: true
					<RCB />
					<br />
				</Example>
				Above true in done means iteration is over. Imagine that we have the
				following obj and we want to iterate through 10 to 15.
				<Example>
					let obj = <LCB />
					<br />
					<div className="ms-4">
						start : 10,
						<br />
						end : 15,
					</div>
					<RCB />
				</Example>
				First of all, when you want to make an object iterable, it should have
				method whose key value is Symbol.iterator. That means I am supposed to
				put a method inside object. At the moment I'm defining the method
				separately, so I will say object.That means there supposed to put a
				method inside object.
				<Example>
					let obj = <LCB />
					<br />
					<div className="ms-4">
						start: 10,
						<br />
						end: 15,
						<br />
						[Symbol.iterator]() <LCB />
						<br />
						<span className="ms-4">return this;</span>
						<br />
						<RCB />,<br />
						next() <LCB />
						<br />
						<div className="ms-4">
							if (this.start {"<"}= this.end) <LCB />
							<br />
							return
							<LCB /> <br />
							<div className="ms-4">
								value: this.start++, <br />
								done: false <br />
								<RCB />;<br />
							</div>
							<RCB /> else <LCB />
							<br />
							return <LCB /> done: true <RCB />;
							<br />
							<RCB />
						</div>
						<RCB />,<br />
					</div>
					<RCB />;<br />
					for (let i of obj) <LCB />
					<div className="ms-4">console.log(i);</div>
					<RCB /> / 10 11 12 13 14 15
					<br />
				</Example>
				This has a limitation and the limitation is that this way is only
				possible when iterator and iterable are the same object. Also, if there
				are two or more for off running simultaneously, then this will not work.
				But actually that is also a very rare case.
			</Answer>
			<Question>Q31. What is the purpose of iterator ?</Question>
			<Answer>
				<Bita>
					The use of an iterator is to make a data structure iterable, which is
					not eddies, strings, maps or sets or other similar collections are
					already iterable. But when you create an object which should have
					facility of putting for off loop on it, then you need to create the
					iterator.
				</Bita>
			</Answer>
			<Question>Q32. How do you create an iterator ?</Question>
			<Answer>
				The symbol that iterator method must be implemented, which should return
				and iterator object and should also have a next method which returns the
				object where you have the value and the done status, or the done status
				only when the iteration needs to end.
			</Answer>
		</div>
	);
}

export default Jsques2;
