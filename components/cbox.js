"use client";

import React, { useEffect } from "react";
import * as dc from "dc";

import styles from "./cbox.module.css";

function Cbox() {
	useEffect(() => {
		const cbox1 = dc.cboxMenu("#cbox1");
		const cbox2 = dc.cboxMenu("#cbox2");
		const cbox3 = dc.cboxMenu("#cbox3");
		const datatable = dc.dataTable("#datatable");
	}, []);

	let letters = [];
	for (var i = 0; i < 26; ++i) letters.push(String.fromCharCode(i + 65));

	const colors = [
		"AliceBlue",
		"AntiqueWhite",
		"Aqua",
		"Aquamarine",
		"Azure",
		"Beige",
		"Bisque",
		"Black",
		"BlanchedAlmond",
		"Blue",
		"BlueViolet",
		"Brown",
		"BurlyWood",
		"CadetBlue",
		"Chartreuse",
		"Chocolate",
		"Coral",
		"CornflowerBlue",
		"Cornsilk",
		"Crimson",
		"Cyan",
		"DarkBlue",
		"DarkCyan",
		"DarkGoldenRod",
		"DarkGray",
		"DarkGrey",
		"DarkGreen",
		"DarkKhaki",
		"DarkMagenta",
		"DarkOliveGreen",
		"Darkorange",
		"DarkOrchid",
		"DarkRed",
		"DarkSalmon",
		"DarkSeaGreen",
		"DarkSlateBlue",
		"DarkSlateGray",
		"DarkSlateGrey",
		"DarkTurquoise",
		"DarkViolet",
		"DeepPink",
		"DeepSkyBlue",
		"DimGray",
		"DimGrey",
		"DodgerBlue",
		"FireBrick",
		"FloralWhite",
		"ForestGreen",
		"Fuchsia",
		"Gainsboro",
		"GhostWhite",
		"Gold",
		"GoldenRod",
		"Gray",
		"Grey",
		"Green",
		"GreenYellow",
		"HoneyDew",
		"HotPink",
		"IndianRed",
		"Indigo",
		"Ivory",
		"Khaki",
		"Lavender",
		"LavenderBlush",
		"LawnGreen",
		"LemonChiffon",
		"LightBlue",
		"LightCoral",
		"LightCyan",
		"LightGoldenRodYellow",
		"LightGray",
		"LightGrey",
		"LightGreen",
		"LightPink",
		"LightSalmon",
		"LightSeaGreen",
		"LightSkyBlue",
		"LightSlateGray",
		"LightSlateGrey",
		"LightSteelBlue",
		"LightYellow",
		"Lime",
		"LimeGreen",
		"Linen",
		"Magenta",
		"Maroon",
		"MediumAquaMarine",
		"MediumBlue",
		"MediumOrchid",
		"MediumPurple",
		"MediumSeaGreen",
		"MediumSlateBlue",
		"MediumSpringGreen",
		"MediumTurquoise",
		"MediumVioletRed",
		"MidnightBlue",
		"MintCream",
		"MistyRose",
		"Moccasin",
		"NavajoWhite",
		"Navy",
		"OldLace",
		"Olive",
		"OliveDrab",
		"Orange",
		"OrangeRed",
		"Orchid",
		"PaleGoldenRod",
		"PaleGreen",
		"PaleTurquoise",
		"PaleVioletRed",
		"PapayaWhip",
		"PeachPuff",
		"Peru",
		"Pink",
		"Plum",
		"PowderBlue",
		"Purple",
		"Red",
		"RosyBrown",
		"RoyalBlue",
		"SaddleBrown",
		"Salmon",
		"SandyBrown",
		"SeaGreen",
		"SeaShell",
		"Sienna",
		"Silver",
		"SkyBlue",
		"SlateBlue",
		"SlateGray",
		"SlateGrey",
		"Snow",
		"SpringGreen",
		"SteelBlue",
		"Tan",
		"Teal",
		"Thistle",
		"Tomato",
		"Turquoise",
		"Violet",
		"Wheat",
		"White",
		"WhiteSmoke",
		"Yellow",
		"YellowGreen",
	];

	const states = [
		"AK",
		"AL",
		"AR",
		"AZ",
		"CA",
		"CO",
		"CT",
		"DC",
		"DE",
		"FL",
		"GA",
		"GU",
		"HI",
		"IA",
		"ID",
		"IL",
		"IN",
		"KS",
		"KY",
		"LA",
		"MA",
		"MD",
		"ME",
		"MH",
		"MI",
		"MN",
		"MO",
		"MS",
		"MT",
		"NC",
		"ND",
		"NE",
		"NH",
		"NJ",
		"NM",
		"NV",
		"NY",
		"OH",
		"OK",
		"OR",
		"PA",
		"PR",
		"PW",
		"RI",
		"SC",
		"SD",
		"TN",
		"TX",
		"UT",
		"VA",
		"VI",
		"VT",
		"WA",
		"WI",
		"WV",
		"WY",
	];

	let data = [];
	const size = 500;

	function rnd(a) {
		return a[Math.floor(Math.random() * a.length)];
	}

	for (i = 0; i < size; ++i)
		data.push({
			letter: rnd(letters),
			color: rnd(colors),
			state: rnd(states),
		});

	return (
		<div className="container">
			<script type="text/javascript" src="header.js"></script>
			<p>
				A meaningless example of multiple cboxMenus on some random
				data...
			</p>
			<div id="cbox1">
				<div>
					<a
						className="reset"
						href="/"
						// href="javascript:cbox1.filterAll();dc.redrawAll();"
						style={{ visibility: "hidden" }}
					>
						reset
					</a>
				</div>
			</div>
			<div id="cbox2">
				<div>
					<a
						className="reset"
						href="/"
						// href="javascript:cbox2.filterAll();dc.redrawAll();"
						style={{ visibility: "hidden" }}
					>
						reset
					</a>
				</div>
			</div>
			<div id="cbox3">
				<div>
					<a
						className="reset"
						href="/"
						// href="javascript:cbox3.filterAll();dc.redrawAll();"
						style={{ visibility: "hidden" }}
					>
						reset
					</a>
				</div>
			</div>
			<div className="clear: both"></div>
			<div id="datatable"></div>
		</div>
	);
}

export default Cbox;
