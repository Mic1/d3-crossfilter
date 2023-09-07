"use client";

import React from "react";
import * as dc from "dc";
import "dc/dist/style/dc.css";

import { format as d3Format, timeFormat, descending } from "d3";
import { ChartTemplate } from "./chartTemplate";
import { numberFormat } from "./cxContext";
import { css } from "glamor";
import { rhythm } from "../../../utils/typography";

const formatDate = timeFormat("%B %d %M :%S, %Y");
const parseDate = (d) => {
	return formatDate(new Date(d)); // "June 30, 2015"
};

export const dateFormatSpecifier = "%I:%M %p";
export const dateFormat = timeFormat(dateFormatSpecifier);

const tableFunc = (divRef, ndx) => {
	const flightTable = dc.dataTable(divRef);

	const dimension = ndx.dimension((d) => d); // const dimension = ndx.dimension((d) => d.month); timeFormat("%B %d, %Y")
	flightTable
		.dimension(dimension)
		.size(40)
		.order(descending)
		.columns([
			// {
			// 	label: "Time",
			// 	format: function (d) {
			// 		return dateFormat(d.date);
			// 	},
			// },
			"date",
			"origin",
			"destination",
			"distance",
			"delay",
		])
		.sortBy(function (d) {
			return d;
		})
		.section(function (d) {
			return d.date;
		})
		.showSections(true)
		.on("renderlet", function (table) {
			table.selectAll(".dc-table-group").classed("info", true);
		});

	return flightTable;
};
const style = css({
	"& tr": {
		"&:hover": {
			background: "#dddd",
		},
	},
	"& td": {
		// padding:rhythm(0.1),
		textAlign: "left",
		borderTop: "1px solid #ddd",
	},
});
export const DataTable = (props) => (
	<ChartTemplate
		chartFunction={tableFunc}
		styles={style}
		title="Flights Table"
		filter={props.filter}
	/>
);
