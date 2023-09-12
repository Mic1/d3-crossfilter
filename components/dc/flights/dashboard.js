"use client";
import { DataContext } from "./cxContext";
import { TimeofDayChart } from "./timeOfDayChart";
import { ArrivalDelayChart } from "./arrivalDelayChart";
import { DistanceChart } from "./distanceChart";

function Dashboard({ data }) {
	// console.log("DashboardRender: ", data[0]);
	return (
		<DataContext data={data}>
			<div className="mx-auto container grid grid-cols-12">
				{/* Header section */}
				<section className="col-span-6 p-10 bg-slate-400 border border-white">
					<TimeofDayChart />
				</section>

				<section className="col-span-6 p-10 bg-slate-400 border border-white">
					<ArrivalDelayChart />
				</section>
				<section className="col-span-6 p-10 bg-slate-400 border border-white">
					<DistanceChart />
				</section>
			</div>
		</DataContext>
	);
}

export default Dashboard;
