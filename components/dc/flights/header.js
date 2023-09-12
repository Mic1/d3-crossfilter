"use client";

import React from "react";
import { CXContext2 } from "./cxContext2";

function Header(ndx) {
	// console.log("HeaderRender: ");
	const context = React.useContext(CXContext2);
	const all = context.ndx.groupAll().value();
	// console.log("Header: ", all);
	// const title = context.ndx.all();

	return (
		<>
			<div>Header: {all} </div>
			<div>
				<select class="box">
					<option>Coffee</option>
					<option>Tea</option>
					<option>Juice</option>
					<option selected>Cocktail</option>
				</select>
			</div>
		</>
	);
}

export default Header;
