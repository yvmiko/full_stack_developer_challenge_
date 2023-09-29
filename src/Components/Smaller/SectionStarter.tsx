/* eslint-disable @next/next/no-img-element */

/* section start for the reusable rectangle */
import React from "react";

export default function SectionStarter({ text }: { text: string }) {
	return (
		<div className="flex items-center gap-3 mb-9">
			<img
				alt="Rectangle"
				src="Rectangle 1.svg"
				className="w-[40px] h-[4px]"></img>
			<div>
				<p className="text-2xl">{text}</p>
			</div>
		</div>
	);
}
