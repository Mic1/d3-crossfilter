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
import "dc/dist/style/dc.css";

export const CXContext = React.createContext("CXContext");

export const formatNumber = format(",d");
export const formatChange = format("+,d");
export const formatDate = timeFormat("%B %d, %Y");
export const formatTime = timeFormat("%I:%M %p");
let ndx = 987;

export function DataContext({ data, children }) {
	// console.log("DataContext.render: ", data[0]);
	const [hasNDX, setHasNDX] = useState(null);
	const [loading, setLoading] = useState(false);

	let dataConverted = false;

	const parseDate = (d) => {
		// 	console.log("parseDate1: ", d);
		return new Date(
			2001,
			d.substring(0, 2) - 1,
			d.substring(2, 4),
			d.substring(4, 6),
			d.substring(6, 8)
		);
	};

	useEffect(() => {
		// console.log("DataContext.useEffect: ", data[0], typeof data[0].date);

		if (!data.length) {
			return;
		}
		if (loading) {
			return;
		}
		setLoading(true);

		if (!hasNDX) {
			// console.log("not hasNDX");

			// console.log("useEffect.ProcessData: ", data[0]);
			if (typeof data[0].date === "string") {
				data.forEach(function (d, i) {
					d.index = i;
					// if (i < 10) console.log("dee1", d.date);
					d.date = parseDate(d.date);
					// if (i < 10) console.log("dee2", d.date);
					d.delay = +d.delay;
					d.distance = +d.distance;
				});
			}

			ndx = crossfilter(data);
			setLoading(false);
			dataConverted = true;
			setHasNDX(true);
		}
	}, []);

	if (!hasNDX) {
		return <div>Loading...</div>;
	}

	return (
		<CXContext.Provider value={{ ndx: ndx }}>{children}</CXContext.Provider>
	);
}
