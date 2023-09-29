/* eslint-disable @next/next/no-img-element */
import Mobile from "@/Components/Navbar/Mobile";
import PC from "@/Components/Navbar/PC";
import CaseStudies from "@/Components/Sections/CaseStudies";
import Footer from "@/Components/Sections/Footer";
import GoodComapny from "@/Components/Sections/GoodComapny";
import Header from "@/Components/Sections/header";
import Whatwedo from "@/Components/Sections/whatwedo";
import breakPointObserver from "@/libs/breakpoint";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({
	subsets: ["latin"],
	style: ["normal"],
	weight: ["400", "700"],
});

export default function Home() {
	const [breakpoint, setBreakpoint] = useState();
	console.log(breakpoint)
	useEffect(() => {
		breakPointObserver(setBreakpoint);
	}, [breakpoint]);

	return (
		<main className={`flex min-h-screen flex-col  ${inter.className}`}>
			{breakpoint === "Mobile" || breakpoint === "Tablet" ? (
				<Mobile />
			) : (
				<PC />
			)}

			<Header />
			<Whatwedo />
			<CaseStudies />
			<GoodComapny />
			<Footer />
		</main>
	);
}
