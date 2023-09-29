/* eslint-disable @next/next/no-img-element */
/* Image card for CaseStudies.tsx */
import React from "react";

export default function CarouselCard({
	title,
	description,
	photo,
}: {
	title: string;
	description: string;
	photo: string;
}) {
	return (
		<div
			className="h-[500px] w-[500px] md:h-[399px] md:w-[399px] flex items-end px-6  overlay"
			style={{
				backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}/${photo})`,
				backgroundSize: "cover", // You can adjust the background properties as needed
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundBlendMode: "overlay",
				backgroundColor: "rgba(0,0,0,0.6)",
			}}>
			<div className="flex flex-col gap-4 ">
				<img
					alt="Rectangle"
					src="Rectangle 1.svg"
					className="w-[40px] h-[4px]"></img>
				<div>
					<h6 className="font-bold text-white text-3xl">{title}</h6>
				</div>
				<div>
					<p className="text-white mb-4 w-full ">{description}</p>
				</div>
			</div>
		</div>
	);
}
