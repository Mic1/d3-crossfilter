"use client";

import React from "react";
import crossfilter from "crossfilter2";
import { csv, timeFormat, timeParse, timeMonth, format } from "d3";
import "dc/dist/style/dc.css";

export const CXContext = React.createContext("CXContext");
export const dateFormatSpecifier = "%m/%d/%Y";
export const dateFormat = timeFormat(dateFormatSpecifier);
export const dateFormatParser = timeParse(dateFormatSpecifier);
export const numberFormat = format(".2f");

export class DataContext extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: false, hasNDX: false };
	}

	componentDidMount() {
		// console.log("cxContextcomponentDidMount");
		if (this.state.hasNDX) {
			return;
		}
		if (this.state.loading) {
			return;
		}
		this.setState({ loading: true });
		csv("./ndx.csv").then((data) => {
			// console.log("cxContext.datalength...", data.length);
			data.forEach(function (d) {
				d.dd = dateFormatParser(d.date);
				d.month = timeMonth(d.dd); // pre-calculate month for better performance
				d.close = +d.close; // coerce to number
				d.open = +d.open;
			});

			this.ndx = crossfilter(data); //TODO possibly need to update this
			this.setState({ loading: false, hasNDX: true });
		});
	}

	render() {
		if (!this.state.hasNDX) {
			return <div>Loading ...</div>;
		}
		return (
			<CXContext.Provider value={{ ndx: this.ndx }}>
				<div ref={this.parent}>{this.props.children}</div>
			</CXContext.Provider>
		);
	}
}
