const breakPoints = {
	Mobile: "(max-width: 640px)",
	Tablet: "(max-width: 768px) and (min-width: 640px)",
	laptop: "(max-width: 1024px) and (min-width: 768px)",
	PC: "(min-width: 1024px)",
};

export default function breakPointObserver(setBreakpoint) {
	matchMediaQuery(breakPoints, setBreakpoint);

	window.addEventListener("resize", () => {
		matchMediaQuery(breakPoints, setBreakpoint);
	});
}

function matchMediaQuery(breakPoints, setBreakpoint) {
	for (var key of Object.keys(breakPoints)) {
		if (window.matchMedia(`(${breakPoints[key]})`).matches) {
			setBreakpoint(key);
		}
	}
}
