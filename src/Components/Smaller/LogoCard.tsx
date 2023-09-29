/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function LogoCard({
	url = "",
	alt = "",
}: {
	url: string;
	alt: string;
}) {
	return (
		<div className="h-[120px] w-[256px] flex flex-col justify-center items-center">
			<img
				className="h-[100px] w-[150px]"
				alt={alt}
				src={`logos/${url}`}></img>
		</div>
	);
}
