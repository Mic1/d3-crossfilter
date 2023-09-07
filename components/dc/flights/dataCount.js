"use client";

import React from "react";
import { scaleLinear, timeMinute, timeHour, timeMinutes } from "d3";

import * as dc from "dc";
import { ChartTemplate } from "./chartTemplate";

const dataCountFunc = (divRef, ndx) => {
	const dataCountFunc = dc
		.dataCount(divRef)
		.dimension(ndx)
		.group(ndx.groupAll())
		.html("Airline on-time performance")
		.html({
			some: "%filter-count out of %total-count flight records selected",
			all: "All records selected. Click and drag on any chart to filter by the associated dimension.",
		});

	return dataCountFunc;
};

export const DataCount = (props) => {
	return <ChartTemplate chartFunction={dataCountFunc} />;
};
