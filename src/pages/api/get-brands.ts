import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
	const brands = await prisma.brand.findMany();

	res.json(brands);
}
