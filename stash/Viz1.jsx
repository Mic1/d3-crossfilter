import Link from "next/link";
import { csvParse } from "d3-dsv";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import { group } from "d3-array";
import { timeDay } from "d3-time";

import { DataContext } from "../../../components/dc/flights/cxContext";
import Dashboard from "../../../components/dc/flights/dashboard";
import crossFilter from "../../../components/dc/flights/crossFilter";

// import crossfilter from "crossfilter";
import styles from "./viz.module.css";

const fetchData = async () => {
	const response = await fetch(
		// "https://gist.githubusercontent.com/curran/71399f6bc86fe25b6eae71fe1a545b09/raw/religionWorldTotals.csv"
		"https://gist.githubusercontent.com/Mic1/edaff71428147ff4ad8439f1f673c167/raw/flights-3m.csv"
	);
	return await response.text();
};

// Various formatters.
// var formatNumber = format(",d"),
// formatChange = format("+,d"),
// formatDate = timeFormat("%B %d, %Y"),
// formatTime = timeFormat("%I:%M %p");

/* deprecated in favor of d3-array */
// A nest operator, for grouping the flight list.
// var nestByDate = d3.nest()
// .key(function(d) { return d3.time.day(d.date); });
// d3.group(data, d => d.name)

async function Viz1() {
	const vizData = await fetchData();
	// console.log(crossfilter);
	const data = csvParse(vizData);
	// console.log(data.length);
	// console.log("crossFilter", crossFilter(data));

	return (
		<DataContext data={data}>
			<Dashboard />
		</DataContext>
	);
}

export default Viz1;
