import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");

  try {
    // If page is provided, return the accounts on that page
    if (page) {
      const accounts = await prisma.user.findMany({
        skip: Number(page) * 20,
        take: 10,
        select: {
          id: true,
          steamId: true,
          name: true,
          createdAt: true,
          updatedAt: true,
          nickname: true,
          aboutMe: true,
          views: true,
          reputation: true,
        },
      });

      if (!accounts) {
        return Response.json(
          { message: "No accounts found on that page" },
          { status: 404 }
        );
      }
      return Response.json(accounts, { status: 200 });
    }
    // If no query parameters are provided, return the first 20 accounts
    const accounts = await prisma.user.findMany({
      take: 20,
      select: {
        id: true,
        steamId: true,
        name: true,
        createdAt: true,
        updatedAt: true,
        nickname: true,
        aboutMe: true,
        views: true,
        reputation: true,
      },
    });
    if (!accounts) {
      return Response.json({ message: "No accounts found" }, { status: 404 });
    }
    return Response.json(accounts, { status: 200 });
  } catch (error) {
    // Handle errors
    console.error("Error fetching User(s):", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  } finally {
    // Close the Prisma Client connection
    await prisma.$disconnect();
  }
}
