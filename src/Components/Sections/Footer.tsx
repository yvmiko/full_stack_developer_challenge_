/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
	return (
		<footer className={`py-[50px] px-6 md:px-24 bg-brand2 text-white`}>
			<div className="flex flex-col">
				<div className="flex items-center gap-3 mb-9">
					<img
						alt="Rectangle"
						src="Rectangle 1.svg"
						className="w-[40px] h-[4px]"></img>
					<div>
						<p className="text-xl text-white">Contact Us</p>
					</div>
				</div>
				<div className="flex justify-between">
					<div className="flex flex-col gap-24">
						<div className="w-[40.4375rem]">
							<h3 className="  font-bold text-5xl">
								Have a project in mind? Let&apos;s make it
								Happen
							</h3>
						</div>
						<div className="grid grid-cols-4 gap-20">
							<div className="flex flex-col">
								<a className="text-xl">Terms of service</a>
								<a className="text-xl">Privacy Policy</a>
								<a className="text-xl">Impressum</a>
							</div>
							<div className="flex flex-col">
								<a className="text-xl">Facebook</a>
								<a className="text-xl">Instagram</a>
								<a className="text-xl">Twitter</a>
							</div>
							<div className="flex flex-col">
								<a className="text-xl">Github</a>
								<a className="text-xl">LinkedIn</a>
								<a className="text-xl">Teams</a>
							</div>
							<div className="flex flex-col">
								<a className="text-xl">Youtube</a>
								<a className="text-xl">Behance</a>
								<a className="text-xl">Dribble</a>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-[5rem]">
						<div className="w-[40.4375rem]">
							<p className="text-xl">
								22 Street Name, Suburb, 8000 <br />
								Cape Town, South Africa <br />
								+27 21 431 0001 <br />
								<a className="underline decoration-solid">
									enquiry@website.co.za
								</a>
							</p>
						</div>
						<div className="flex flex-col">
							<p className="text-xl">Explore open jobs</p>
							<p className="text-xl">
								{" "}
								©2000 - 2023 Company Name
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
