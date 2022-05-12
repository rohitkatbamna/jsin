import React from "react";
import {
	Answer,
	Bita,
	Example,
	LCB,
	Question,
	RCB,
} from "../styled-components/styled-com";

function Jsques3() {
	return (
		<>
			<Question>Q40. How do you handle errors in JavaScript code ?</Question>
			<Answer>
				Ans. Error handling is one of the very important concepts in any
				programming language. When you write the code, it may have errors at
				runtime. In case if error appears, the program will break. It will stop
				the execution in between. Ideally, you should write the code with proper
				validations, but still there are some unforeseen situations where the
				program breaks in between. In such cases, the end user is stuck.
				Ideally, what should happen is that when the program faces errors, even
				after validations, it should handle it and notify the user with proper
				error details like Error number and description.In such places using try
				catch block is useful.See example below
				<Example>
					try <LCB />
					<br />
					<div className="ms-4">console.log(a);</div>
					<RCB /> catch(err) <LCB />
					<div className="ms-4">
						console.log("Error Found"); //Error Found
						<br />
						console.log(err.name); //ReferenceError
						<br />
						console.log(err.message); //a is not defined
						<br />
						console.log(err.stack); // ReferenceError: a is not defined
						<br />
						console.log(err); // ReferenceError: a is not defined
					</div>
					<RCB />
				</Example>
				If you want to generate or throw your own custom errors. You have the
				throw operator, which you can use to generate your own error. See
				example below.
				<Example>
					let a = 8;
					<br />
					let ageErr = new Error("Age Error");
					<br />
					try <LCB /> <br />
					<div className="ms-4">
						if (a {"<"} 18) <LCB /> <br />
						<div className="ms-4">throw ageErr;</div>
						<RCB />
					</div>
					<RCB /> catch (err) <LCB /> <br />
					<div className="ms-4">console.log(err.message); // Age Error </div>
					<RCB />
				</Example>
				That is one more block which can be added with try, catch or even
				without catch. And that is the final block. The syntax is like this.
				<Example>
					try <LCB />
					<br />
					/ statements
					<br />
					<RCB /> catch (err) <LCB />
					<br />
					/ statements
					<br />
					<RCB /> finally <LCB /> <br />
					/ statements <br />
					<RCB />
				</Example>
				<Example>
					try <LCB />
					<br />
					/ statements
					<br />
					<RCB /> finally <LCB /> <br />
					/ statements <br />
					<RCB />
				</Example>
				Final block is executed at the end of the block and it is always
				executed.So finally is something which we use when we have the finishing
				code. Write the finalizing code. At that time we use the final block
				code.
			</Answer>
			<Question>Q41. When do you need try...catch ?.</Question>
			<Answer>
				Ans. Try catch is handled at runtime. So when you see that the code
				executed is expecting some unforeseen situations, some portion of code
				needs to be managed properly so that the program doesn't stop in
				between. Then we use the try catch block. It's all about handling the
				error without breaking the code execution.
			</Answer>
			<Question>Q42. How can you generate an error ?</Question>
			<Answer>
				Ans. We can generate a custom error using this throw statement and error
				class or predefined JavaScript error class can also be generated using
				Throw statements.
			</Answer>
			<Question>
				Q43. Can you generate syntax error or reference error kind of predefined
				JavaScript Error ?
			</Question>
			<Answer>
				These are the predefined JavaScript errors, but you can use the throw
				statement to raise the JavaScript builtin errors as well.
			</Answer>
			<Question>Q44. What is the purpose of the final block?</Question>
			<Answer>
				Ans. The final block contains the code, which is always executed.
				Whether that is an error or that is no error in the code. So if there is
				an error, the catch code is executed. But finally, code also always
				executed.
				<Bita>
					So finally contains code which does some finishing work or some code
					which ought to be executed.
				</Bita>
			</Answer>
			<Question>
				Q45. How can you refer to the name or description of added ?
			</Question>
			<Answer>
				Ans. So inside the Catch block, we have seen that there is the err
				object or whatever you name the "err" object. Just console.log object
				dot name(err.name) or object dot message (err.message) or object dot
				stack (err.stack)
			</Answer>
			<Question>
				Q46. Can we have finally block without a catch block ?
			</Question>
			<Answer>
				Ans. Of course we can have, not necessarily that we always have a catch
				block. There are times we dont want error to be catch so insead we just
				use finally.
			</Answer>
		</>
	);
}
export default Jsques3;
