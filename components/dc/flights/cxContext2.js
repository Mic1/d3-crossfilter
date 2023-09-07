"use client";

import React from "react";
import crossfilter from "crossfilter2";
import { csv, timeFormat, timeParse, timeMonth, format } from "d3";
import "dc/dist/style/dc.css";

export const CXContext2 = React.createContext("CXContext");
export const formatNumber = format(",d");
export const formatChange = format("+,d");
export const formatDate = timeFormat("%B %d, %Y");

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

export class DataContext2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: false, hasNDX: false };
	}

	componentDidMount() {
		// console.log("DataContext2.mount: ", this.props);
		if (this.state.hasNDX) {
			return;
		}
		if (this.state.loading) {
			return;
		}
		this.setState({ loading: true });
		csv("./flights-3m.csv").then((data) => {
			data.forEach(function (d, i) {
				d.index = i;
				d.date = parseDate(d.date);
				d.delay = +d.delay;
				d.distance = +d.distance;
			});

			this.ndx = crossfilter(data); //TODO possibly need to update this
			this.setState({ loading: false, hasNDX: true });
		});
	}

	render() {
		console.log("DataContext2.render: ", this.props.chartGroupName);
		// if (this.props.filter) {
		// 	console.log(
		// 		"DataContext2.filter: ",
		// 		this.props.filter,
		// 		this.ndx.valueOf()
		// 	);
		// 	// this.ndx.timeOfDay.filter(this.props.filter); // paymentsByTotal.filter([100, 200]); // selects payments whose total is between 100 and 200
		// }
		if (!this.state.hasNDX) {
			return <div>Loading ...</div>;
		}
		return (
			<CXContext2.Provider
				value={{
					ndx: this.ndx,
					chartGroupName: this.props.chartGroupName,
					reset: false,
				}}
			>
				<div ref={this.parent}>{this.props.children}</div>
			</CXContext2.Provider>
		);
	}
}
