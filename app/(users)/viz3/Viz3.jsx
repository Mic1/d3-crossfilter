import React from "react";
import { csvParse } from "d3-dsv";

import Dashboard2 from "../../../components/dc/flights/dashboard2";

// const fetchData = async () => {
// 	const response = await fetch(
// 		// "https://gist.githubusercontent.com/curran/71399f6bc86fe25b6eae71fe1a545b09/raw/religionWorldTotals.csv"
// 		"https://gist.githubusercontent.com/Mic1/edaff71428147ff4ad8439f1f673c167/raw/flights-3m.csv"
// 	);
// 	return await response.text();
// };

function Viz3() {
	// const vizData = await fetchData();
	// console.log("Viz3data1: ", vizData[0]);
	// const data = csvParse(vizData);
	// console.log("Viz3data2: ", data[0]);

	return (
		<div>
			<Dashboard2 />
		</div>
	);
}

export default Viz3;
