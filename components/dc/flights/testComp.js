"use client";

import React from "react";
import { CXContext } from "./cxContext";

function TestComp() {
	const context = React.useContext(CXContext);
	// console.log("TestComp: ", context.ndx);
	return <div>TestComp</div>;
}

export default TestComp;
