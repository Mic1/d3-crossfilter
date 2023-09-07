"use client";

import React, { useEffect } from "react";
import { CXContext2 } from "./cxContext2";
import * as dc from "dc";
import { scaleLinear, scaleOrdinal, select } from "d3";
import { rhythm } from "../../../utils/typography";
import { css } from "glamor";
import { filters } from "dc";
import { publish } from "../../../components/events";

const ResetButton = ({ chart, testReset }) => {
	const style = css({
		padding: rhythm(0.1),
		display: "inline",
		cursor: "pointer",
		float: "right",
		"&:hover": {
			background: "#ddd",
		},
	});

	return (
		<span
			{...style}
			onClick={() => {
				console.log(
					"ResetButton: ",
					chart.filter(),
					chart.chartGroup()
				);
				chart.filterAll();
				dc.redrawAll();
				publish("reset");
			}}
		>
			reset
		</span>
	);
};

export const ChartTemplate = (props) => {
	/*
    We render the dc chart using an effect. We want to pass the chart as a prop after the dc call,
    but there is nothing by default to trigger a re-render and the prop, by default would be undefined.
    To solve this, we hold a state key and increment it after the effect runs. 
    By passing the key to the parent div, we get a rerender once the chart is defined. 
    */

	console.log("ChartTemplate: ", props);

	const context = React.useContext(CXContext2);
	const [chart, updateChart] = React.useState(null);
	const ndx = context.ndx;
	// console.log("ChartTemplate: props: ", props);
	const testChartGroup = context.chartGroupName;

	const div = React.useRef(null);
	// console.log("ChartTemplate: render: ", props, testChartGroup);

	useEffect(() => {
		const newChart = props.chartFunction(div.current, ndx); // chartfunction takes the ref and does something with it
		// newChart.chartGroup(testChartGroup);
		console.log(
			"ChartTemplate useEffect.ID: ",
			newChart.chartID(),
			props.chartId
		);
		// if (props.chartId) {
		// 	console.log("push!!!: ", props.chartId, newChart.chartID());
		// 	props.handleLookupChange({
		// 		id: props.chartId,
		// 		idLookup: newChart.chartID(),
		// 		title: props.title,
		// 	});
		// }

		newChart.render();
		updateChart(newChart);
	}, []); // run this effect only once

	useEffect(() => {
		// console.log("ChartTemplate useEffect2: ", props);

		console.log("DEBUG: ", props.filter);

		if (chart && props.filter) {
			console.log(
				"ChartTemplate useEffect2in: ",
				chart,
				props.title,
				props.filter,
				props.filter.chartId,
				props.chartId
			);

			if (props.chartId === props.filter.chartId) {
				console.log("Match Ids: ", props.chartId, props.filter.chartId);
				const theFilter = props.filter.chartFilter;
				console.log(
					"filterApply: ",
					props.title,
					props.chartId,
					props.filter.chartId,
					props.filter.chartFilter
				);

				dc.filterAll();
				console.log("chart.filter: ", chart.filter());
				chart.replaceFilter(
					filters.RangedFilter(
						(props.filter.chartFilter.date &&
							new Date(props.filter.chartFilter.from)) ||
							props.filter.chartFilter.from,
						(props.filter.chartFilter.date &&
							new Date(props.filter.chartFilter.to)) ||
							props.filter.chartFilter.to
					)
				);
				console.log("Match so: chart.filter: ", chart.filter());
				dc.redrawAll();
			} else {
				console.log("No Match: ", props.title, props.filter.chartName);
			}
		}
	}, [props.filter]);

	const chartStyles = css({
		width: "100%",
		height: "auto",
		boxSizing: "border-box",
		padding: rhythm(1),
		"& label": {
			textTransform: "capitalize",
			textDecoration: "underline",
		},
	});
	return (
		<div ref={div} {...chartStyles}>
			<ResetButton chart={chart} />
			<label>{props.title}</label>
		</div>
	);
};
