import "react-alice-carousel/lib/alice-carousel.css";

import React from "react";
import AliceCarousel from "react-alice-carousel";

import CarouselCard from "../Smaller/CarouselCard";
import SectionStarter from "../Smaller/SectionStarter";
import SectionWrapper from "../Smaller/SectionWrapper";

const handleDragStart = (e: any) => e.preventDefault();

// Infinite Scroll of the carousel lead to Hydration error
// TODO: Fix this later

export default function CaseStudies() {
	const items = [
		<CarouselCard
			key={1}
			title={"The Olympian"}
			description={
				"The only athelete in the world to do her Olympic routine in 2020"
			}
			photo={"olympian.jpeg"}
		/>,
		<CarouselCard
			key={2}
			title={"The Savings Jar"}
			description={"Grow your savings treasure and grow your dragon"}
			photo={"dragon.jpeg"}
		/>,
		<CarouselCard
			key={3}
			title={"Skhokho seMali"}
			description={
				"Helping South Africans become #CashCleva with Skhokho and TymeBank"
			}
			photo={"skhokho.jpeg"}
		/>,
		<CarouselCard
			key={2}
			title={"The Savings Jar"}
			description={"Grow your savings treasure and grow your dragon"}
			photo={"dragon.jpeg"}
		/>,
		<CarouselCard
			key={3}
			title={"Skhokho seMali"}
			description={
				"Helping South Africans become #CashCleva with Skhokho and TymeBank"
			}
			photo={"skhokho.jpeg"}
		/>,
		<CarouselCard
			key={1}
			title={"The Olympian"}
			description={
				"The only athelete in the world to do her Olympic routine in 2020"
			}
			photo={"olympian.jpeg"}
		/>,
	];

	return (
		<SectionWrapper>
			<SectionStarter text={"Case studies"} />
			<AliceCarousel
				mouseTracking
				items={items}
				autoPlay // Removed infinite
				disableButtonsControls
				disableDotsControls
				autoPlayInterval={2000}
				responsive={{
					1024: { items: 3 },
					768: { items: 2 },
					640: { items: 1 },
				}}
			/>
		</SectionWrapper>
	);
}
