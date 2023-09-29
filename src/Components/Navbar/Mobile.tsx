/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

export default function Mobile() {
	const [toggle, setToggle] = useState(false);
	const navLinks = [
		{
			id: 1,
			title: "Services",
		},
		{
			id: 2,
			title: "Industries",
		},
		{
			id: 3,
			title: "Cases",
		},
		{
			id: 4,
			title: "Contact",
		},
	];
	return (
		<nav className="w-full h-20 flex items-center bg-brand px-24 text-white">
			<div className="flex min-w-full flex-row align items-center justify-between px-[20px] py-2 bg-color">
				<img
					src="logo.svg"
					alt="logo"
					className="h-[30px] w-[100px]"
				/>
				{toggle ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
						onClick={() => setToggle(!toggle)}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
						onClick={() => setToggle(!toggle)}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
						/>
					</svg>
				)}
				{/* Sidebar */}
				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} p-6 bg-white text-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className="list-none flex justify-end items-start flex-1 flex-col">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-medium cursor-pointer text-[16px] ${"text-black"} ${
									index === navLinks.length - 1
										? "mb-0"
										: "mb-4"
								}`}>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
