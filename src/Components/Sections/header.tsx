export default function Header() {
	return (
		<div
			className="flex h-[600px] flex-col justify-end
			w-full header  items-start px-24"
			style={{
				backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}/confidence.jpeg)`,
				backgroundSize: "cover", // You can adjust the background properties as needed
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}>
			<h1 className="text-white text-5xl font-bold">
				Live with Confidence
			</h1>
			<h2 className="text-white text-xl lg:w-[570px] md:w-full mt-7">
				{" "}
				Jose Mourinho brings confidence to pan-African Sanlam campaign{" "}
			</h2>
			<button className="rounded-full bg-brand  text-white font-semibold w-[9rem]  h-9 mt-12 mb-24">
				View Project
			</button>
		</div>
	);
}
