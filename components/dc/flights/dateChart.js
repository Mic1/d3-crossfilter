"use client";

import React from "react";
import { scaleLinear, timeDay, timeDays, scaleTime } from "d3";

import * as dc from "dc";
import { ChartTemplate } from "./chartTemplate";

const dateFunc = (divRef, ndx) => {
	const dimension = ndx.dimension(function (d) {
		return d.date;
	});
	const group = dimension.group(timeDay);
	// timeOfDayChart.dimension(dimension).group(group);

	const dateChart = dc
		.barChart(divRef)
		.dimension(dimension)
		.group(group)
		// .gap(2)
		.round(timeDay.round)
		.x(
			scaleTime()
				.domain([new Date(2001, 0, 1), new Date(2001, 3, 1)])
				.rangeRound([0, 10 * 90])
		)
		.xUnits(timeDays)

		.elasticY(true)
		.renderHorizontalGridLines(true);
	return dateChart;
};

export const DateChart = ({ filter, chartId }) => {
	return (
		<ChartTemplate
			chartFunction={dateFunc}
			title="Date"
			filter={filter}
			chartId={chartId}
			// handleLookupChange={handleLookupChange}
		/>
	);
};

/* barChart()
				.dimension(date)
				.group(dates)
				.round(d3.time.day.round)
				.x(
					d3.time
						.scale()
						.domain([new Date(2001, 0, 1), new Date(2001, 3, 1)])
						.rangeRound([0, 10 * 90])
				)
				.filter([new Date(2001, 1, 1), new Date(2001, 2, 1)]),
		];
    
    date = flight.dimension(function (d) {
				return d.date;
			}),
			dates = date.group(d3.time.day),
      */
