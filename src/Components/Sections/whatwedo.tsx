/* eslint-disable @next/next/no-img-element */
import React from "react";

import SectionStarter from "../Smaller/SectionStarter";
import SectionWrapper from "../Smaller/SectionWrapper";

export default function Whatwedo() {
	return (
		<SectionWrapper>
			<SectionStarter text="What we do" />
			<div>
				<h3 className="lg:text-5xl md:text-5xl text-4xl font-bold">
					We offer a complete range of bespoke design and development
					services to help you turn your ideas into digital
					masterpieces.
				</h3>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
				<div className="w-[290px] h-[300px] flex flex-col items-center mb-4 md:items-start gap-12">
					<img
						alt="Web Dev Icon"
						src="Web Dev Icon.svg"
						className="h-16 w-16"
					/>
					<div>
						<h6 className="font-bold text-2xl  h-[41px]">
							Web Development
						</h6>
					</div>
					<div>
						<p className="text-center md:text-start">
							We use cutting-edge with development technologies to
							help our clients fulfill their business goals
							through functional, reliable solutions.
						</p>
					</div>
				</div>
				<div className="w-[290px] h-[300px] flex flex-col gap-12 items-center mb-4 md:items-start">
					<img
						alt="UX Icon Icon"
						src="UX Icon.svg"
						className="h-16 w-16"
					/>
					<div>
						<h6 className="font-bold text-2xl h-[41px] text-center md:text-start">
							User experience & design
						</h6>
					</div>
					<div>
						<p className="text-center md:text-start">
							Our complete web design services will bring your
							ideas to life and provide you with a sleek high
							performing product that elevates your business.
						</p>
					</div>
				</div>
				<div className="w-[290px] h-[300px] flex flex-col gap-12 mb-4 items-center md:items-start">
					<img
						alt="App Dev Icon"
						src="App Dev Icon.svg"
						className="h-16 w-16"
					/>
					<div>
						<h6 className="font-bold text-2xl  h-[41px] text-center md:text-start">
							Mobile app development
						</h6>
					</div>
					<div>
						<p className="text-center md:text-start">
							Our extensive mobile development experience allows
							us to create custom native and cross-platform iOS
							and Android mobile solutions for our clients.
						</p>
					</div>
				</div>
				<div className="w-[290px] h-[300px] flex flex-col gap-12 mb-4 items-center md:items-start">
					<img
						alt="Blockchain Solutions Icon"
						src="icon.svg"
						className="h-16 w-16"
					/>
					<div>
						<h6 className="font-bold text-2xl text-center md:text-start  h-[41px]">
							Blockchain solutions
						</h6>
					</div>
					<div>
						<p className="text-center md:text-start">
							{" "}
							We conduct market research to determine the optimal
							blockchain-based solutions to help you grow your
							company and achieve your business goals.
						</p>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
