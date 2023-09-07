"use client";

import React from "react";
import { scaleLinear, timeMinute, timeHour, timeMinutes } from "d3";

import * as dc from "dc";
import { ChartTemplate } from "./chartTemplate";

const arrivalDelayFunc = (divRef, ndx) => {
	// const arrivalDelayChart = dc.barChart(divRef);

	const dimension = ndx.dimension(function (d) {
		return Math.max(-60, Math.min(149, d.delay));
	});
	const group = dimension.group(function (d) {
		return Math.floor(d / 10) * 10;
	});

	const arrivalDelayChart = dc
		.barChart(divRef)
		.dimension(dimension)
		.group(group)
		.gap(2)
		.x(
			scaleLinear()
				.domain([-60, 150])
				.rangeRound([0, 20 * 24])
		)
		// .centerBar(true)
		// .alwaysUseRounding(true)
		.xUnits(function () {
			return 20;
		})
		.elasticY(true)

		.renderHorizontalGridLines(true);
	// arrivalDelayChart.yAxis().ticks(10);

	return arrivalDelayChart;
};

export const ArrivalDelayChart = ({ filter, chartId }) => {
	return (
		<ChartTemplate
			chartFunction={arrivalDelayFunc}
			filter={filter}
			title="Arrival Delay (min)"
			chartId={chartId}
			// handleLookupChange={handleLookupChange}
		/>
	);
};

/* barChart()
				.dimension(delay)
				.group(delays)
				.x(
					d3.scale
						.linear()
						.domain([-60, 150])
						.rangeRound([0, 10 * 21])
				),*/
