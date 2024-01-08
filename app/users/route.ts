import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Retrieves user accounts based on query parameters.
 * If `racetree_id` is provided, returns the account with that racetree_id.
 * If `steam_id` is provided, returns the account with that steam_id.
 * If no query parameters are provided, returns all accounts.
 * 
 * @param request - The request object containing the URL and query parameters.
 * @returns A JSON response containing the user account(s) or an error message.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const raceTreeId = searchParams.get("racetree_id");
  const steamId = searchParams.get("steam_id");

  try {
    // If racetree_id is provided, return the account with that racetree_id
    if (raceTreeId) {
      const raceTreeAccount = await prisma.user.findUnique({
        where: { id: Number(raceTreeId) },
      });

      if (!raceTreeAccount) {
        return Response.json(
          { message: "RaceTree Account not yet Registered" },
          { status: 404 }
        );
      }
      return Response.json(raceTreeAccount, { status: 200 });
    }
    // If steam_id is provided, return the account with that steam_id
    if (steamId) {
      const steamAccount = await prisma.user.findFirst({
        where: { steamId: String(steamId) },
      });

      if (!steamAccount) {
        return Response.json(
          { message: "Steam Account not yet Registered" },
          { status: 404 }
        );
      }
      return Response.json(steamAccount, { status: 200 });
    }
    // If no query parameters are provided, return all accounts
    const accounts = await prisma.user.findMany();
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
