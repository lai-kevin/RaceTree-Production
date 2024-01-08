import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Retrieves game data based on query parameters.
 * If 'id' is provided, returns the game with that id.
 * If 'name' is provided, returns the game with that name.
 * If no query parameters are provided, returns all games.
 * 
 * @param request - The request object containing the URL and query parameters.
 * @returns A JSON response with the game data or an error message.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  try {
    // If id is provided, return the game with that id
    if (id) {
      const game = await prisma.game.findUnique({
        where: { id: Number(id) },
      });

      if (!game) {
        return Response.json({ message: "Game not yet Registered" }, { status: 404 });
      }
      return Response.json(game, { status: 200 });
    }

    // If name is provided, return the game with that name
    if (name) {
      const game = await prisma.game.findFirst({
        where: { name: String(name) },
      });

      if (!game) {
        return Response.json({ message: "Game not yet Registered" }, { status: 404 });
      }
      return Response.json(game, { status: 200 });
    }

    // If no query parameters are provided, return all games
    const games = await prisma.game.findMany();
    if (!games) {
      return Response.json({ message: "No games found" }, { status: 404 });
    }
    return Response.json(games, { status: 200 });
  } catch (error) {
    // Handle errors
    console.error("Error fetching Game:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  } finally {
    // Close the Prisma Client connection
    await prisma.$disconnect();
  }
}

