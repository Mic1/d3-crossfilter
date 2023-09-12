"use client";

import React, { useState, useEffect } from "react";
import crossfilter from "crossfilter2";
import {
	csv,
	timeFormat,
	timeParse,
	timeMonth,
	timeDay,
	format,
	nest,
	group,
} from "d3";
// import "dc/dist/style/dc.css";

export const CXContext = React.createContext("CXContext");

export const formatNumber = format(",d");
export const formatChange = format("+,d");
export const formatDate = timeFormat("%B %d, %Y");
export const formatTime = timeFormat("%I:%M %p");
let ndx = 987;
let ndx2 = null;

export function DataContext({ data, children }) {
	// ("DataContext1: ", data[0]);
	const [hasNDX, setHasNDX] = useState(null);
	const [loading, setLoading] = useState(false);

	function parseDate(d) {
		return new Date(
			2001,
			d.substring(0, 2) - 1,
			d.substring(2, 4),
			d.substring(4, 6),
			d.substring(6, 8)
		);
	}

	// csv("./flights-3m.csv").then((data) => {
	// A group operator, for grouping the flight list.
	const groupByDate = group(data, (d) => timeDay(d.date));

	const parseTime = timeParse("%B %d, %Y");
	data.forEach(function (d, i) {
		d.index = i;
		// console.log("d.date", d.date);
		d.date = parseDate(d.date);
		d.delay = +d.delay;
		d.distance = +d.distance;
	});

	// console.log("context_data", data.length);

	ndx = crossfilter(data);
	// console.log("useEffect_ndx", ndx);
	const all = ndx.groupAll();

	const date = ndx.dimension(function (d) {
		return d.date;
	});
	// console.log("date", date);
	// console.log("date.top", date.top(10));
	const dates = date.group(timeDay);
	const hour = ndx.dimension(function (d, i) {
		if (i < 10) {
			// console.log("d.date.getHours()", d.date.getHours());
			// console.log("d.date.getMinutes()", d.date.getMinutes());
		}
		return d.date.getHours() + d.date.getMinutes() / 60;
	});
	// console.log("hour", hour);
	// console.log("hour.top", hour.top(10));

	const hours = hour.group(Math.floor);
	// console.log("hours", hours);
	// console.log("hours.top", hours.top(10));
	const delay = ndx.dimension(function (d) {
		return Math.max(-60, Math.min(149, d.delay));
	});
	// console.log("delay: ", delay);
	// console.log("delay.top: ", delay.top(10));
	const delays = delay.group(function (d) {
		return Math.floor(d / 10) * 10;
	});
	// console.log("delays: ", delays);
	// console.log("delays.top: ", delays.top(10));
	const distance = ndx.dimension(function (d) {
		return Math.min(1999, d.distance);
	});
	// console.log("distance: ", distance);
	// console.log("distance.top: ", distance.top(10));
	const distances = distance.group(function (d) {
		return Math.floor(d / 50) * 50;
	});
	// console.log("distances: ", distances);
	// console.log("distances.top: ", distances.top(10));
	setLoading(false);
	setHasNDX(true);

	// console.log("context_ndx: ", ndx.size());

	return (
		<CXContext.Provider value={{ ndx: ndx }}>{children}</CXContext.Provider>
	);
}

// export default cxContext;
