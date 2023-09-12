// import React from "react";

function Home() {
	return (
		<>
			<div className="bg-slate-700 text-gray-300 text-xl text-center underline p-10">
				Next 13 + React + d3 + dc + crossfilter
			</div>
			<div className="bg-slate-500 text-gray-300 text-xl underline p-10">
				Initial commit of basic Crossfilter examples using Next 13 and
				React.
			</div>
			<div className="bg-slate-600 text-gray-300 ">
				<ul className="ml-10">
					<li className="text-xl underline">ToDo:</li>
					<div className="pl-10">
						<li>* Finish converting glamor css to tailwind</li>
						<li>* Make responsive</li>
						<li>
							* Can any part of the crossfilter gui be translated
							into React Server Components? Probably not?
						</li>
						<li>* Add d3-x3d.js</li>
						<li>
							* Source crossfilter cube from mongodb and add React
							Server Components
						</li>
					</div>
				</ul>
			</div>
		</>
	);
}

export default Home;
