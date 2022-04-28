import React from "react";
import { Answer, Question, Bita } from "../styled-components/styled-com";

function Others() {
	return (
		<>
			<Question>Q What is console.log&#40; 1 &lt; 10 &lt; 100 &#41; ?</Question>
			<Answer>
				Ans. Explanation is that type coersion is a bitch. Lets first Evaluate{" "}
				<Bita> 1 &lt; 10 </Bita> that gives <Bita>true</Bita>. Then this
				equation becomes <Bita> true &lt; 100 </Bita> now the compiler will
				force a type coersion making <Bita> true to 1</Bita> so this becomes{" "}
				<Bita>1 &lt; 100</Bita> which is <Bita>true</Bita>.
				<br />
				<Bita>So the answer is true.</Bita>
			</Answer>
			<Question>Q What is console.log&#40; 1 &gt; 10 &gt; 100 &#41; ?</Question>
			<Answer>
				Ans. Again type coersion is a bitch. For Explanation Look above.
				<br />
				<Bita>The answer is false.</Bita>
			</Answer>
		</>
	);
}
export default Others;
