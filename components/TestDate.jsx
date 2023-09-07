"use client";

import React from "react";

function TestDate({ dateObj }) {
	console.log("TestDate dateObj: ", dateObj);
	console.log("Home:hours: ", dateObj.getHours());
	return <div>TestDate: {dateObj}</div>;
}

export default TestDate;
