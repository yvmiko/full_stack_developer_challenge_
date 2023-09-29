import { fetcher } from "@/libs/fetcher";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useQuery } from "@tanstack/react-query";
import React, { Fragment, useState } from "react";

import LogoCard from "../Smaller/LogoCard";
import SectionStarter from "../Smaller/SectionStarter";
import SectionWrapper from "../Smaller/SectionWrapper";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function GoodComapny() {
	const { data, error, isLoading } = useQuery(["Brands"], () =>
		fetcher("api/get-brands")
	);

	console.log(data);
	const [sortedData, setSortedData] = useState(data);
	const [sort, setSort] = useState("");

	const sortAlphabetical = () => {
		setSort("alphabetical");
		data.sort((a, b) => a.name.localeCompare(b.name));
	};

	const sortNonAlphabetical = () => {
		setSort("non-alphabetical");
	};

	return (
		<SectionWrapper>
			<SectionStarter text="You'll be in good company" />
			<div className="flex flex-col gap-6">
				<h2 className="text-5xl font-bold text-center md:text-start">
					Trusted by leading brands
				</h2>
				<div className="w-full flex justify-end">
					<Menu
						as="div"
						className="relative inline-block text-left">
						<div>
							<Menu.Button className="inline-flex w-[100px] justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
								Sort
								<ChevronDownIcon
									className="-mr-1 h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</Menu.Button>
						</div>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95">
							<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<a
												onClick={() =>
													sortAlphabetical()
												}
												className={classNames(
													active
														? "bg-gray-100 text-gray-900"
														: "text-gray-700",
													"block px-4 py-2 text-sm"
												)}>
												Alphabetically (A-Z)
											</a>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>

				<div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-2">
					{data?.map((logo, index) => (
						<LogoCard
							key={index}
							url={logo.logo}
							alt={logo.name}
						/>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}
