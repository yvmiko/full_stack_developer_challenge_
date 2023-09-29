import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const logo = [
	{
		name: "BBC",
		url: "bbc-black.svg",
	},
	{
		name: "Distell",
		url: "distell-black.svg",
	},
	{
		name: "Engen",
		url: "engen-black.svg",
	},
	{
		name: "Liquid",
		url: "liquid-black.svg",
	},
	{
		name: "Microsoft",
		url: "microsoft-black.svg",
	},
	{
		name: "Multichoice",
		url: "multichoice-black.svg",
	},
	{
		name: "Nike",
		url: "nike-black.svg",
	},
	{
		name: "Pick and Pay",
		url: "pnp-black.svg",
	},
	{
		name: "Sanlam",
		url: "sanlam-black.svg",
	},
	{
		name: "Santam",
		url: "santam-black.svg",
	},
	{
		name: "TFG",
		url: "tfg-black.svg",
	},
	{
		name: "Tyme Bank",
		url: "tyme-bank-black.svg",
	},
	{
		name: "Visa",
		url: "visa-black.svg",
	},
	{
		name: "Spotify",
		url: "spotify-black.svg",
	},
	{
		name: "Wesgrow",
		url: "wesgrow-black.svg",
	},
];

async function main() {
	console.log(`Start seeding ...`);

	for (const l of logo) {
		const logo = await prisma.brand.create({
			data: {
				name: l.name,
				logo: l.url,
			},
		});
		console.log(`Created logo with id: ${logo.id}`);
	}

	console.log(`Seeding finished.`);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);

		await prisma.$disconnect();

		process.exit(1);
	});
