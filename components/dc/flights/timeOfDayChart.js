"use client";

import React, { useState } from "react";
import { scaleLinear, scaleOrdinal } from "d3";

import * as dc from "dc";
import { ChartTemplate } from "./chartTemplate";

const timeOfDayFunc = (divRef, ndx) => {
	const col = "green";
	const timeOfDay = ndx.dimension(function (d) {
		return d.date.getHours() + d.date.getMinutes() / 60;
	});
	// console.log("timeOfDayFunc: ");
	// timeOfDay.filter(filter);
	const group = timeOfDay.group(Math.floor);

	const timeOfDayChart = dc
		.barChart(divRef)
		.dimension(timeOfDay)
		.group(group)
		.x(
			scaleLinear()
				.domain([0, 24])
				.rangeRound([0, 10 * 24])
		)
		.colors(scaleOrdinal().range([col, "green", "blue"]))
		.elasticY(true)
		.renderHorizontalGridLines(true);
	return timeOfDayChart;
};

export const TimeofDayChart = ({ filter, chartId }) => {
	const [filter1, setFilter1] = useState([20, 24]);
	// const chartId = 8;
	// console.log("TimeofDayChart.chartID: ", chartId);
	if (filter) {
		// console.log("TimeofDayChart.filter: ", filter);
		// ndx.dimension.timeOfDay.filter([20, 24]);
	}

	return (
		<ChartTemplate
			chartFunction={timeOfDayFunc}
			filter={filter}
			title="Time Of Day"
			chartId={chartId}
			// handleLookupChange={handleLookupChange}
		/>
	);
};
