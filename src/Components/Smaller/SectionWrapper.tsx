import React from "react";

export default function SectionWrapper({ children }: { children: any }) {
	return (
		<div className={`py-[50px] px-5 md:px-24 bg-white`}>
			<div className="flex flex-col">{children}</div>
		</div>
	);
}
