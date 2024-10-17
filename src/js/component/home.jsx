import React from "react";

//include images into your bundle
import Counter from "./Counter.jsx"
//create your first component
const Home = () => {
	let seconds = 0
	setInterval(() => {
		console.log(seconds)
		seconds++
	}, 1000)
	return (
		<div className="text-center">

			<Counter>

			</Counter>
		</div>

	);

};

export default Home;
