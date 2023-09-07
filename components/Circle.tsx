const Circle = () => {
	const width = 500;
	const height = 500;
	const radius = Math.min(width, height) / 2;
	console.log("Circle.render (server message)");

	return (
		<svg width={width} height={height}>
			<circle
				cx={width / 2}
				cy={height / 2}
				r={radius}
				fill="yellow"
				stroke="black"
				strokeWidth="1"
			/>
		</svg>
	);
};

export default Circle;
