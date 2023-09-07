"use client";

import React from "react";
import { scaleLinear } from "d3";

import * as dc from "dc";
import { ChartTemplate } from "./chartTemplate";

const distanceFunc = (divRef, ndx) => {
	const dimension = ndx.dimension(function (d) {
		return Math.min(1999, d.distance);
	});
	const group = dimension.group(function (d) {
		return Math.floor(d / 50) * 50;
	});
	// timeOfDayChart.dimension(dimension).group(group);

	const distanceChart = dc
		.barChart(divRef)
		.dimension(dimension)
		.group(group)
		.gap(2)
		.x(
			scaleLinear()
				.domain([0, 2000])
				.rangeRound([0, 10 * 40])
		)
		.xUnits(function () {
			return 40;
		})
		.elasticY(true)
		.renderHorizontalGridLines(true);
	return distanceChart;
};

export const DistanceChart = ({ filter, chartId }) => {
	return (
		<ChartTemplate
			chartFunction={distanceFunc}
			title="Distance (miles)"
			filter={filter}
			chartId={chartId}
			// handleLookupChange={handleLookupChange}
		/>
	);
};

/* .dimension(distance)
				.group(distances)
				.x(
					d3.scale
						.linear()
						.domain([0, 2000])
						.rangeRound([0, 10 * 40])
				),
        
        distance = flight.dimension(function (d) {
				return Math.min(1999, d.distance);
			}),
			distances = distance.group(function (d) {
				return Math.floor(d / 50) * 50;
			});
      */
