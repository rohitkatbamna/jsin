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
				Ans.{" "}
				<Bita>
					The use of an iterator is to make a data structure iterable, which is
					not Arrays, strings, maps or sets or other similar collections are
					already iterable. But when you create an object which should have
					facility of putting for...of loop on it, then you need to create the
					iterator.
				</Bita>
			</Answer>
			<Question>Q32. How do you create an iterator ?</Question>
			<Answer>
				Ans. The Symbol.iterator method must be implemented, which should return
				and iterator object and should also have a next method which returns the
				object where you have the value and the done status, or the done status
				only when the iteration needs to end.
			</Answer>
			<Question>Q33. Explain a practical use of an iterator.</Question>
			<Answer>
				Ans.{" "}
				<Bita>
					The use of any iterator is not very prompt, when you use it in the
					same scope.But let's say you have your own data structure which is
					used by other programmers. Then the real charm comes into picture as
					the custom data structure which you have created needs to have a
					provision of far off that is kind of loop. Then if your object is not
					iterable, then it will not work. So you are in a way creating a
					pointer to more in the data structure which you have provided to the
					end user who is actually a programmer.
				</Bita>
			</Answer>
			<Question>Q34. What are Generators functions ?</Question>
			<Answer>
				Ans.{" "}
				<Bita>
					Generators can help you to pause and resume the call. That is the
					simple definition of generator functions.
				</Bita>
				Normally when you write a function, it returns a single value. You can
				think of generators as a kind of function which can return multiple
				values in phases.
				<Bita>
					The function* is the keyword used to define a generator function.
					Yield is an operator which pauses the generator. Yield also helps to
					receive input and send output, but that is the next phase.
					<br />
					The yield operator, which we are using, is something we can use only
					in generator functions.
					<br />
				</Bita>
				<br />
				<Example>
					const test = function* () <LCB /> <br />
					<div className="ms-4">
						console.log("Hello");
						<br />
						yield "YieldValue";
						<br />
						console.log("World");
						<br />
						yield;
						<br />
						console.log("And Galaxy");
					</div>
					<RCB />;<br />
					const newtest = test();
					<br />
					for (let i of newtest) <LCB />
					<br />
					<span className="ms-4">console.log(i);</span>
					<br />
					<RCB />
					<br />
					console.log(...newtest);
					<br />
					<Bita>
						Both for loop of new test and ...newtest return the same i.e <br />
						Hello <br />
						YieldValue <br />
						World <br />
						undefined <br />
						And Galaxy <br />
					</Bita>
				</Example>
				<Bita>
					So now we know that generators are really working well with iterator
					because generators are iterable as well. The yield operator, which we
					are using, is something we can use only in generator functions.
					<br /> When it comes to recursive function or even calling one
					generator function from another. There is a specific syntax that is by
					using yield* .
					<br />
					Generator works best with it iterators.See exmaple below,
				</Bita>
				<Example>
					const obj = <LCB />
					<br />
					<div className="ms-4">
						<div className="ms-4">
							start: 10,
							<br />
							end: 15,
							<br />
							*[Symbol.iterator]() <LCB />
							<br />
							for (let cnt = this.start; cnt {"<"}= this.end; cnt++) <LCB />
							<br />
							yield cnt;
							<br />
							<RCB />
						</div>
						<RCB />,<br />
					</div>
					<RCB />;<br />
					console.log([...obj]);
					<br />
				</Example>
				<Bita>
					The generator object has next method which we have already seen, which
					returns object. It also has two other methods return method and throw
					method. Return method is more or less similar to the next method,
					where you have the value and done will always be true and it
					terminates the generator. So return method is used to terminate the
					generator.
					<br />
					See the return method below
				</Bita>
				<br />
				The odinary way next() works.
				<Example>
					function* gen() <LCB />
					<br />
					<div className="ms-4">
						yield "One";
						<br />
						yield "Two";
						<br />
					</div>
					<RCB />
					<br />
					const gobj = gen();
					<br />
					console.log(gobj.next());//
					<LCB /> value: 'One', done: false <RCB />
					<br />
					console.log(gobj.next()); //
					<LCB /> value: 'Two', done: false <RCB />
					<br />
					console.log(gobj.next()); //
					<LCB /> value: undefined , done: true <RCB />
					<br />
				</Example>
				See and compare above and below to understand return;
				<Example>
					function* gen() <LCB />
					<br />
					<div className="ms-4">
						yield "One";
						<br />
						yield "Two";
						<br />
					</div>
					<RCB />
					<br />
					const gobj = gen();
					<br />
					console.log(gobj.next());//
					<LCB /> value: 'One', done: false <RCB />
					<br />
					console.log(gobj.return()); //
					<LCB /> value: undefined , done: true <RCB />
					<br />
					console.log(gobj.next()); //
					<LCB /> value: undefined , done: true <RCB />
					<br />
				</Example>
				<Bita>
					It means that on the second call, because we have used the return
					method, it has terminated the generator.So if you have a situation
					where you have a condition and then you want to come out of the
					generator function, you want to terminate the generator function you
					can use return() function.
					<br />
					You can also suspend the termination if you are using finally and you
					use the yield statement in it.
				</Bita>
				<Example>
					function* gen() <LCB />
					<div className="ms-4">
						try <LCB />
						<br />
						yield "One"; <br />
						yield "Two";
						<br />
						<RCB /> finally <LCB />
						<br />
						yield "Finally";
						<br />
						<RCB />
						<br />
					</div>
					<RCB />
					<br />
					const gobj = gen();
					<br />
					console.log(gobj.next()); //
					<LCB /> value: 'One', done: false <RCB />
					<br />
					console.log(gobj.return());//
					<LCB /> value: 'Finally', done: false <RCB />
					<br />
				</Example>
				The next method we are discussing is the throw method.
				<Bita>See the exmaple below</Bita>
				<Example>
					function* gen() <LCB />
					<div className="ms-4">
						try <LCB />
						<br />
						<div className="ms-4">
							yield "One"; <br />
							yield "Two";
						</div>
						<RCB /> catch <LCB />
						<div className="ms-4">console.log("Error " + err);</div>
						<RCB />
						<br />
					</div>
					<RCB />
					<br />
					const gobj = gen();
					<br />
					console.log(gobj.next()); //
					<LCB /> value: 'One', done: false <RCB />
					<br />
					console.log(gobj.throw());// Error undefined
					<LCB /> value: undefined, done: true <RCB />
					<br />
				</Example>
				So there will always be an if condition, maybe switch case where you see
				that if certain values are or conditions are not satisfied or maybe
				satisfied, then you want to terminate or generate the error as long as
				error is concerned. Anyway, whenever there is an error generated by a
				try catch, which you generally use to handle the JavaScript errors,
				that's where you can have the generator function object, not through
				method. Anyway, whenever there is an error generated by a try catch,
				which you generally use to handle the JavaScript errors, that's where
				you can have the generator function object, not through method.
				<br />
				<Bita>
					We have just seen the syntax of generators and how generators are
					working with it returns also as long as the practical implementation
					is concerned. I would like to underline this that generator functions
					are rarely used in your JavaScript code, but yes, there are situations
					where you have the asynchronous processes where it returns and
					generators combined. They can work well and do see how generators and
					integrators with asynchronous processes work. You can check the
					asynchronous section that I have discussed asynchronous iterator and
					generators concept.
				</Bita>
			</Answer>
			<Question>
				Q35. Which is the right syntax function* () <LCB />
				<RCB /> or function *() <LCB />
				<RCB /> ?
			</Question>
			<Answer>
				Ans. Both of them are correct also this is correct{" "}
				<Bita>
					function*() <LCB />
					<RCB />.
				</Bita>
			</Answer>
			<Question>Q36. Explain all methods of generator object.</Question>
			<Answer>
				Ans. So the three matters which we have discussed, the next method which
				actually moves the function pointer to the next line from the next, that
				is the last suspended yield. It proceeds further. Whereas the return
				allows you to terminate the function. And the throw method, which can
				help you to raise an error with the generator object. So these are the
				three methods related to the generator object.
			</Answer>
			<Question>Q37. Explain the use of yield*.</Question>
			<Answer>
				Ans. So we have seen that it's about calling a generator function from
				another generator function. Or even when you have to call a recursive
				generator function, then you have to use the yield* syntax.
			</Answer>
			<Question>
				Q38. Can you prevent the return from terminating the generator.
			</Question>
			<Answer>
				Ans. Yes, absolutely. Of course, there should also be a conditional way
				to deal with this situation. But when you see it are done, it terminates
				the execution. But let's say if you write a yield statement in finally
				like this(see Example below), then it will certainly prevent the return
				from terminating the generator.
				<Example>
					function* gen() <LCB />
					<div className="ms-4">
						try <LCB />
						<br />
						<div className="ms-4">
							yield "One"; <br />
							yield "Two";
						</div>
						<RCB />
						finally
						<LCB />
						<br />
						<div className="ms-4">yield "Finally";</div>
						<RCB />
						<br />
					</div>
					<RCB />
				</Example>
			</Answer>
			<Question>Q39. What is the concept of GC or garbage collection?</Question>
			<Answer>
				Ans. When you declare a variable object added or function, all are
				stored somewhere in the memory. Assume that you have an object. A When
				your program starts, a location is created and data stored in this
				location. There are multiple locations, in fact, to hold huge values,
				but we are making one box as a location to simplify the presentation.
				All right. So this object is which has some data and stored in the
				location. In between there might be some read write operations.
				<br />
				And what happens when the program ends ?{" "}
				<Bita>
					Once the program ends, the party is over. Now this location needs to
					be cleaned as it is of no use. So when the program ends, this is the
					garbage which needs to be cleared. Normal memory management or memory
					lifecycle can be thought of like this.
				</Bita>{" "}
				You have led to an object, a variable or a function that is an
				allocation of memory happens first, then there might be some rewrite
				process. This is a continuous process. In fact, till the program ends
				and when the program ends free, these locations are releasing the
				memory. In some programming languages, you can call routines to clear
				this garbage and some languages manage it automatically. But in short,
				clearing these free locations is the process of collecting the garbage
				or garbage collection, or even sometimes referred as GC. So I guess now
				you know, what is garbage collection? And this explanation is general
				and applied to all programming languages. Now let's talk about how this
				thing happens in JavaScript. JavaScript is a high level language, so you
				do not need to allocate memory. Memory allocation and releasing happens
				automatically, making the memory free in the process of garbage
				collection. And there is a routine who does it called the garbage
				collector. And this GC process is also called Automatic Memory
				Management, with reference to JavaScript.
			</Answer>
		</div>
	);
}

export default Jsques2;
