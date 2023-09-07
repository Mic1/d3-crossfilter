"use client";

import React, { useState, useEffect } from "react";
// import { Grid, Row, Col } from "react-flexbox-grid";
import { chartRegistry, filters } from "dc";
import * as dc from "dc";
import { DataContext2 } from "./cxContext2";
import { DataCount } from "./dataCount";
import { TimeofDayChart } from "./timeOfDayChart";
import { ArrivalDelayChart } from "./arrivalDelayChart";
import { DistanceChart } from "./distanceChart";
import { DateChart } from "./dateChart";
import { DataTable } from "./flightTable";
import { subscribe } from "../../../components/events";

const questions = [
	{ i: 1, q: "Some questions to consider:", f: null },
	{
		i: 2,
		chartId: 7,
		q: "How does time-of-day correlate with arrival delay?",
		f: [{ delay: [[100, 150]] }],
		chartFilter: { from: 100, to: 150 },
	},
	{
		i: 3,
		chartId: 6,
		q: "Are longer flights more likely to arrive early?",
		f: [{ distance: [[1700, 2000]] }],
		chartFilter: { from: 1700, to: 2000 },
	},
	{
		i: 4,
		chartId: 6,
		q: "Are shorter flights more likely to arrive early?",
		f: [{ distance: [[0, 300]] }],
		chartFilter: { from: 0, to: 300 },
	},
	{
		i: 5,
		q: "What happened on January 12?",
		chartId: 5,
		f: [{ date: [[new Date(2001, 0, 12), new Date(2001, 0, 13)]] }],
		chartFilter: {
			from: [[new Date(2001, 0, 12)]],
			to: [[new Date(2001, 0, 13)]],
			date: true,
		},
	},
	{
		i: 6,
		chartId: 5,
		q: "Weekend flight patterns?",
		f: [
			{
				date: [[new Date(2001, 0, 27), new Date(2001, 0, 29)]],
			},
		],
		chartFilter: {
			from: [[new Date(2001, 0, 27)]],
			to: [[new Date(2001, 0, 29)]],
			date: true,
		},
	},
	{
		i: 7,
		chartId: 5,
		q: "Weekday flight patterns?",
		chartFilter: {
			from: [[new Date(2001, 0, 29)]],
			to: [[new Date(2001, 1, 3)]],
			date: true,
		},
	},
	{
		i: 8,
		chartId: 8,
		chartName: "Time Of Day",
		q: "Morning flight patterns?",
		chartFilter: { from: 4, to: 7 },
	},
	{
		i: 9,
		chartId: 8,
		q: "Night flight patterns?",
		chartFilter: { from: 21, to: 24 },
	},
];

const Dashboard2 = (props) => {
	const [filter, setFilter] = useState(null);
	const [selectIndex, setSelectIndex] = useState(
		JSON.stringify(questions[0])
	);

	const chartGroupName = "chartGroup1";

	useEffect(() => {
		subscribe("reset", (e) => {
			console.log("subscribeReset: ", e);
			setSelectIndex(1);
		});
	}, []);

	const handleSelectChange = (filterObject) => {
		setSelectIndex(filterObject);
		console.log("handleSelectChange1: ", dc.chartRegistry.list()[2]);
		console.log(
			"handleSelectChange2: ",
			dc.chartRegistry.list()[3].chartID()
		);

		setFilter(JSON.parse(filterObject));
	};

	const handleReset = () => {
		console.log("handleReset: ");
		setSelectIndex(JSON.stringify(questions[0]));
	};

	return (
		<div className="p-4 mt-8 text-slate-700">
			<DataContext2 filter={filter} chartGroupName={chartGroupName}>
				{/* grid parent */}
				<div className="mx-auto container grid grid-cols-12">
					<header className="col-span-4 font-bold text-lg underline p-10 bg-slate-400 border border-white">
						Airline on-time performance
					</header>
					<header className="col-span-8 p-10 bg-slate-400 border border-white">
						<DataCount />
						<div className="pl-6">
							<select
								className="p-1 w-5/6 h-30 border bg-slate-300 border-slate-700 shadow-lg"
								value={selectIndex}
								onChange={(e) => {
									console.log("e.target: ", e.target.value);
									handleSelectChange(e.target.value);
								}}
							>
								{questions.map((q) => {
									return (
										<option
											key={q.i}
											className="text-blue-700"
											value={JSON.stringify(q)}
											// selected={q.i === selectIndex}
										>
											{q.q}
										</option>
									);
								})}
							</select>
						</div>
					</header>
					{/* Header section */}
					<header className="col-span-8 p-10 bg-slate-400 border border-white">
						<TimeofDayChart
							filter={filter}
							chartId={8}
							// handleLookupChange={handleLookupChange}
						/>
					</header>

					{/* Left menu */}
					<aside className="col-span-4 p-10 bg-slate-400 border border-white ">
						<ArrivalDelayChart
							filter={filter}
							chartId={7}
							// handleLookupChange={handleLookupChange}
						/>
					</aside>

					{/* Right sidebar */}

					{/* Footer */}

					<aside className="col-span-12 p-10 bg-slate-400 border border-white">
						<DistanceChart
							filter={filter}
							chartId={6}
							// handleLookupChange={handleLookupChange}
						/>
					</aside>
					<aside className="col-span-12 p-10 bg-slate-400 border border-white">
						<DateChart
							filter={filter}
							chartId={5}
							// handleLookupChange={handleLookupChange}
						/>
					</aside>
					<aside className="col-span-12 p-10 bg-slate-400 border border-white">
						<DataTable filter={filter} />
					</aside>
				</div>
			</DataContext2>
		</div>
	);
};

export default Dashboard2;
