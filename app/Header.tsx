import Link from "next/link";
import React from "react";

let current = "Home";

function Header() {
	return (
		<header className="p-5 bg-blue-500">
			<Link
				href="/"
				className="px-2 py-1 m-2 bg-white text-blue-500 rounded-lg"
			>
				Home
			</Link>
			<Link
				href="/viz3"
				className="px-2 py-1 m-2 bg-white text-blue-500 rounded-lg"
			>
				Airline Flights
			</Link>
			<Link
				href="/viz2"
				className="px-2 py-1 m-2 bg-white text-blue-500 rounded-lg"
			>
				Gains & Losses
			</Link>
		</header>
	);
}

export default Header;
