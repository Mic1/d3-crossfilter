"use client";

import React from "react";
// import { Grid, Row, Col } from "react-flexbox-grid";
import { BubbleChart } from "./bubbleChart";
import { GainOrLossChart } from "./gainOrLessChart";
import { QuarterChart } from "./quarterChart";
import { DayOfWeekChart } from "./dayOfWeekChart";
import { FluctuationChart } from "./fluctuationChart";
import { MoveChart } from "./moveChart";
import { DataTable } from "./nasdaqTable";
import { DataContext } from "./cxContext";

const Dashboard = (props) => {
	console.log("DashboardRender");

	return (
		<div className="p-4 mt-8">
			<DataContext>
				{/* grid parent */}
				<div className="mx-auto container grid grid-cols-12">
					{/* Header section */}
					<header className="col-span-12 p-10 bg-slate-400 border border-white">
						<BubbleChart />
					</header>

					{/* Left menu */}
					<aside className="col-span-5 md:col-span-12 p-10 bg-slate-400 border border-white ">
						<MoveChart />
					</aside>

					{/* Right sidebar */}

					{/* Footer */}

					<aside className="col-span-4 p-10 bg-slate-400 border border-white">
						<GainOrLossChart />
					</aside>
					<footer className="col-span-4 p-10 bg-slate-400 border border-white">
						<FluctuationChart />
					</footer>
					<aside className="col-span-4 bg-slate-400 p-10 border borrder-white">
						<QuarterChart />
					</aside>
					<footer className="col-span-4 p-10 bg-slate-400 border border-white">
						<DayOfWeekChart />
					</footer>
					{/* Main content <Col md={5} style={{overflowY:'scroll', maxHeight:'70vh', width:'100%'}}> */}
					<main className="col-span-5 row-span-5 overflow-y-scroll w-full md:col-span-8 p-10 bg-slate-400 border border-white">
						<DataTable />
					</main>
				</div>
			</DataContext>
		</div>
	);
};

export default Dashboard;
