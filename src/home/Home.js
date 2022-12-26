import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1>Welcome</h1>
			<Link to='/initial'>Initial</Link>
		</div>
	);
}

export default Home;