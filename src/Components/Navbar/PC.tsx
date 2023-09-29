/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function PC() {
	return (
		<nav className="w-full h-20 flex items-center bg-brand px-24 text-white">
			<div className="flex min-w-full flex-row align items-center justify-between px-[20px] py-2 bg-color">
				<img
					src="logo.svg"
					alt="logo"
					className="h-[30px] w-[100px]"
				/>
				<div className="flex gap-5 ">
					<div>
						<a>Services</a>
					</div>
					<div>
						<a>Industries</a>
					</div>
					<div>
						<a>Cases</a>
					</div>
					<div>
						<a>Contact</a>
					</div>
				</div>
				<div>
					<button className="rounded-full bg-white px-2 text-brand font-bold w-[7rem] h-9">
						Let&apos;s Talk
					</button>
				</div>
			</div>
		</nav>
	);
}
