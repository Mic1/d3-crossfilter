"use client";

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

const testObj = {
	var1: "test",
	var2: "test2",
};

// Various formatters.
const formatNumber = format(",d"),
	formatChange = format("+,d"),
	formatDate = timeFormat("%B %d, %Y"),
	formatTime = timeFormat("%I:%M %p");

// Like d3.time.format, but faster.
function parseDate(d) {
	return new Date(
		2001,
		d.substring(0, 2) - 1,
		d.substring(2, 4),
		d.substring(4, 6),
		d.substring(6, 8)
	);
}

function crossFilter(data) {
	const groupByDate = group(data, (d) => timeDay(d.date));
	// A little coercion, since the CSV is untyped.
	const parseTime = timeParse("%B %d, %Y");
	data.forEach(function (d, i) {
		d.index = i;
		// console.log("d.date", d.date);
		d.date = parseDate(d.date);
		d.delay = +d.delay;
		d.distance = +d.distance;
	});

	// Create the crossfilter for the relevant dimensions and groups.
	const ndx = crossfilter(data);
	const all = ndx.groupAll();
	const date = ndx.dimension(function (d) {
		return d.date;
	});
	// console.log("dateTop", date.top.valueOf());
	const dates = date.group(timeDay);
	const hour = ndx.dimension(function (d) {
		// console.log("dee", d);
		return d.date.getHours() + d.date.getMinutes() / 60;
	});
	const hours = hour.group(Math.floor);
	const delay = ndx.dimension(function (d) {
		return Math.max(-60, Math.min(149, d.delay));
	});
	const delays = delay.group(function (d) {
		return Math.floor(d / 10) * 10;
	});
	const distance = ndx.dimension(function (d) {
		return Math.min(1999, d.distance);
	});
	const distances = distance.group(function (d) {
		return Math.floor(d / 50) * 50;
	});

	return {
		xFilter: ndx,
		all: all,
		date: date,
		dates: dates,
		hour: hour,
		hours: hours,
		delay: delay,
		delays: delays,
		distance: distance,
		distances: distances,
	};
}

export default crossFilter;
