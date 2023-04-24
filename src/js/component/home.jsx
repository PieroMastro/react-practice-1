import React from "react";
import Counter from "./Counter.jsx";
import CardGenerator from "./CardGenerator.jsx";
import TrafficLight from "./TrafficLight.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center m-5">
			{/* <div className="m-5">
				<Counter />
			</div>
			<div className="m-5">
				<CardGenerator />
			</div> */}
			<div className="m-5">
				<TrafficLight />
			</div>
		</div>
	);
};

export default Home;
